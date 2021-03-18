const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    password: { type: String, unique: true },
    confirmPassword: { type: String, unique: true },
    firstName: { type: String, unique: true },
    surName: { type: String, unique: true },
    birth: { type: Number, unique: true },
    date: { type: Date, default: Date.now }

});

const signupModel = mongoose.model('users', signupSchema);
module.exports = signupModel;