const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    password: { type: String, unique: true },
    firstName: String,
    surName: String,
    birth: Number,
    date: { type: Date, default: Date.now }

});

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;