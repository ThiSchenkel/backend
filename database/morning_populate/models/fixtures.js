const mongoose = require('mongoose');
const studentModel = require('./student');
const addressModel = require('./address');

mongoose.connect('mongodb://localhost:27017/mongoose_populate', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('DB mongoose_populate connecté');
});

studentModel.deleteMany({}).then(() => {
    studentModel.create([{
        firstName: 'Charles',
        surName: 'Magne',
    }]).then((response) => { console.log(response) })
});

addressModel.deleteMany({}).then(() => {
    addressModel.create([{
        streetName: "Palais du Roy",
        streetNumber: "1",
        postCode: "52062-52080",
        city: "Aix-la-Chapelle "
    }])
});

