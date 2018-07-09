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

module.exports = router;