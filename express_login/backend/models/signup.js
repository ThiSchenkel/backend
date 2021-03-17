const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
    email: String,
    password: String,
    firstName: String,
    surName: String,
    birth: Number
});

const signupModel = mongoose.model('users', signupSchema);
module.exports = signupModel;