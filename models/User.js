//Model Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: Date.now
    },

});

// created a model that takes in 'user'
module.exports = User = mongoose.model('user', UserSchema);