const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    _id: Objectld,
    firstName: String,
    surName: String,
    address: Objectld,
    address: [{ type: mongoose.Types.ObjectId, ref: 'address' }]
});

const studentModel = mongoose.model('students', studentSchema);
module.exports = studentModel;