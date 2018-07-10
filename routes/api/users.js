//all Get, DELELET etc for db goes here
//all the routes go
const express = require('express');
const router = express.Router();

//bring in User Model, to make queries like find, save etx
const User = require('../../models/User');

// @route   GET api/users
// @desc    Get all Users
// @acess   Public
router.get('/', (req, res) => {
    User.find() //taking the model caleld Items, then using find method
        .sort({ date: -1 })
        .then(items => res.json(items)) // returns items(in Model file), read the file cus its json so use res

});


// @route   POST api/users
// @desc    Create a Post, Users
// @acess   Public
router.post('/', (req, res) => {
    const newUser = new User({
        userName: req.body.userName,
        email: req.body.email
    }); //created in memory

    newUser.save().then(user => res.json(user)); // save the user
});

// @route   DELETE api/users/:id
// @desc    Delete a Users given an id
// @acess   Public
router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;