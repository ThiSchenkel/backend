const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/garage', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('DB connecté');
})

const CarSchema = new mongoose.Schema({
    marque: String,
    modele: String,
    annee: Number
});

const CarModel = mongoose.model('cars', CarSchema);

CarModel.deleteMany({}).then(() => {
    CarModel.create({
        marque: 'Renault',
        modele: 'Espace',
        annee: 1999
    },
        {
            marque: 'Renault',
            modele: 'Scenic',
            annee: 2004
        },
        {
            marque: 'Peugeot',
            modele: '308',
            annee: 2017
        }
    ).then(response => console.log(response))
        .catch(error => console.log(error));
})
