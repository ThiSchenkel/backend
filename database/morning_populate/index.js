const mongoose = require('mongoose');
const studentModel = require('./models/student');
const addressModel = require('./models/address');


mongoose.connect('mongodb://localhost:27017/mongoose_populate', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('DB mongoose_populate connecté');
});

//Récupération de l'iD de l'adresse dans la variable addressId
const addressId = addressModel.find({ streetName: "Palais du Roy" }).then((response) => { console.log(response[0]._id) });



