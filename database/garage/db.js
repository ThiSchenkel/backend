const mongoose = require('mongoose');

mongoose.connect('mongodb :// localhost : 27017/garage', { useNewUrlParser: true }, () => {
    console.log('DB connecté');
})

const CarSchema = new mongoose.Schema({
    marque: String,
    modele: String,
    annee: Number
});

const CarModel = mongoose.model('Cars', CarSchema);

CarModel.create({
    marque: 'Renault',
    modele: 'Espace',
    annee: 1999
});