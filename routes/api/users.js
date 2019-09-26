const bcrypt = require('bcryptjs');
const express = require("express");
const dotenv = require('dotenv').config();
const router = express();
const mongoose = require('mongoose');
const User = require("../../models/User");
const jwt = require('jsonwebtoken');


// @route   GET api/users
// @desc    Get all Users
// @acess   Public
router.get("/", (req, res) => {
  User.find() 
    .sort({
      date: -1
    })
    .then(items => res.json(items));
});

// @route   POST api/login
// @desc     Checks User Validity. Password is hashed and therefore must be unhashed to accuractely checked.
// @acess   Public
router.post('/login', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  email = email.toLowerCase();
  email = email.trim();
  password = password.trim();

  User.findOne({
      email
    })
    .then(user => {
      if (!user) {
        return res
          .status(401) 
          .json({
            success: false,
            message: "Wrong email/password combination"
          });
      }
      //Check Password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) { 
            user.online = true;
            user.save();
            user.token = jwt.sign({userId: user._id, exp: Math.floor(Date.now() / 1000) + 1000*60*60}, 'secret');
            return res.json({ msg: "Success", user: user});
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

// @route   POST api/register
// @desc     Register Users with a unique email. If email is not uniquely stored then user must choose a new email
// @acess   Public

router.post('/register', (req, res) => {
  User.findOne({
      email: req.body.email
    }).then((user) => {
      if (user) { 
        return res.status(400).json({
          email: "Email already exists"
        });
      } else { 
        const newUser = User({
          userName: req.body.userName,
          email: req.body.email,
          password: req.body.password
        });
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;

            newUser.password = hash; 
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

// @route   GET api/online
// @desc    Returns all online users in the database
// @acess   Public
router.get("/getAllOnline", (req, res) => {
  User.find({online: true})
  .then(onlineUsers => {res.json(onlineUsers)});
});

// @route   POST api/turnOffline
// @desc    changes user state from {online:true} --> {online:false}
// @acess   Public
router.post("/turnOffline", (req, res) => {
  let userId = req.body.token.userId;
  console.log(userId);
  User.find({_id: userId})
    .then((user)=>{
      user.online = false;
    })
    .save();
  return res.status(200).json({message: "successful"});
});
module.exports = router;