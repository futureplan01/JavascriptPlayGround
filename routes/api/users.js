//all Get, DELELET etc for db goes here
//all the routes go
const bcrypt = require('bcryptjs');
const express = require("express");
const router = express.Router();

//bring in User Model, to make queries like find, save etx
const User = require("../../models/User");

// @route   GET api/users
// @desc    Get all Users
// @acess   Public
router.get("/", (req, res) => {
  User.find() //taking the model caleld Items, then using find method
    .sort({
      date: -1
    })
    .then(items => res.json(items)); // returns items(in Model file), read the file cus its json so use res
});

// @route   POST api/users
// @desc    Create a Post, Users
// @acess   Public
router.post("/", (req, res) => {
  const newUser = new User({
    password: req.body.password,
    email: req.body.email
  }); //created in memory

  console.log("Added User:  " + newUser);
  newUser
    .save()
    .then(user => res.json(user))
    .catch(err => {
      console.log(err);
    }); // save the user
});


router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  //Find User by email
  User.findOne({
      email
    })
    .then(user => {
      //check for user
      console.log("Loggin In: " + user);

      if (!user) {
        return res.status(404).json({
          email: "User email not found!"
        });
      }

      //Check Password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) { // if passwords match
            // WRITE CODE HERE FOR LOGIN IS SUCCESSFUL
            res.json({
              msg: 'Success'
            });
          } else {
            return res.status(400).json({
              password: "Password incorrect!"
            });
          }
        });


    })
});


// @router  GET api/users/register
// @desc    Register a user
// @access  Public
router.post('/register', (req, res) => {
  //check if email exists in db already 
  User.findOne({
      email: req.body.email
    }).then((user) => {
      if (user) { //check if db did not find anything
        return res.status(400).json({
          email: "Email already exists"
        });
      } else { // Email does not exist, can be created
        // Create an instance of the model and save the values
        const newUser = User({
          userName: req.body.userName,
          email: req.body.email,
          password: req.body.password
        });
        //hash and salt the password before storing into db
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;

            newUser.password = hash; // save the hashed pass to newUser.password
            //save the newUser to db
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err))
          })
        });
      }
    })
    .catch(err => console.log(err));
});

// @route   DELETE api/users/:id
// @desc    Delete a Users given an id
// @acess   Public
router.delete("/:id", (req, res) => {
  User.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({
      success: true
    })))
    .catch(err => res.status(404).json({
      success: false
    }));
});

module.exports = router;