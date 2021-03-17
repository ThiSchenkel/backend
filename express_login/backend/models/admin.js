const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')

const adminSchema = new mongoose.Schema({
    firstName: String,
    surName: String,
    age: Number
});

const adminModel = mongoose.model('users', adminSchema);
module.exports = adminModel;