const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    firstName: String,
    surName: String,
    birth: Number
});

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;