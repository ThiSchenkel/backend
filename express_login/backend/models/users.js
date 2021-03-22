const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, unique: true, required: true, min: 8 },
    firstName: { type: String, required: true },
    surName: { type: String, required: true },
    birth: { type: Date, required: true },
    date: { type: Date, default: Date.now }

});

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;