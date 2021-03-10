const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    _id: Objectld,
    streetName: String,
    streetNumber: String,
    postCode: String,
    city: String
});

const addressModel = mongoose.model('address', addressSchema);

module.exports = addressModel;