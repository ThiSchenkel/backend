const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')

const loginSchema = new mongoose.Schema({
    email: String,
    password: String,
});

const loginModel = mongoose.model('users', loginSchema);
module.exports = loginModel;