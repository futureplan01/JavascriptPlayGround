const bcrypt = require('bcryptjs');
const express = require("express");
const session = require("express-session");
const MongoStore = require('connect-mongo')(session);
const router = express();
const mongoose = require('mongoose');

//bring in User Model, to make queries like find, save etx
const User = require("../../models/User");


//Sessions
router.use(
  session({
    // Random String to make the hash that is generated secure
    secret: "the-man-in-the-mirror",
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
      mongooseConnection: mongoose.connection

    }),
    cookie: {maxAge : 10* 1000}
  })
);

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
  let email = req.body.email;
  let user = req.body.user;
  let password = req.body.password;
  email = email.toLowerCase();
  email = email.trim();
  password = password.trim();
  //Find User by email
  User.findOne({
      email
    })
    .then(user => {
      if (!user) {
        return res
          .status(401) // Status Code 401 means authentication has failed
          .json({
            success: false,
            message: "Wrong email/password combination"
          });
      }
  

      //Check Password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) { 
            // session gets added to the session store
            req.session.user = user;
            return res.json({ msg: "Success", user: user });
          } else {
            return res
              .status(401)
              .json({
                success: false,
                message: "Wrong email/password combination"
              });
          }
        });
    });
  });
  // Takes SessionID and query session store to find user info
  function isLoggedIn(req, res) {
    if (req.session.user) {
      let info = {name:req.session.user.userName };
      res.send(info);
    } else {
      console.log('session is not there');
      res.send(false);
    }
  }
  router.get('/isLoggedIn', isLoggedIn);

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