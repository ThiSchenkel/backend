const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName: String,
    surName: String,
    addressId: String,
    address: [{ type: mongoose.Types.ObjectId, ref: 'address' }]
});

const studentModel = mongoose.model('students', studentSchema);
module.exports = studentModel;