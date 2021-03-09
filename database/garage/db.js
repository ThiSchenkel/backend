const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/garage', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('DB connecté');
})

const carSchema = new mongoose.Schema({
    marque: String,
    modele: String,
    annee: Number,
    created: Date
});

const carModel = mongoose.model('cars', carSchema);

carModel.deleteMany({}).then(() => {
    carModel.create(
        [{

            marque: 'Renault',
            modele: 'Espace',
            annee: 1999,
            created: new Date()
        },
        {

            marque: 'Renault',
            modele: 'Scenic',
            annee: 2004,
            created: new Date()
        },
        {

            marque: 'Peugeot',
            modele: '308',
            annee: 2017,
            created: new Date()
        }]
    ).then((response) => console.log(`Tableau : ${response}`));
});


// Penser à mettre en commentaire le delete et create car l'id (sans être défini manuellement) est constamment créée
carModel.findById(('60474202924bc43fe0a60090'))
    .then((response) => console.log(`Recherche par ID : ${response}`));


carModel.updateOne(
    { _id: '60474202924bc43fe0a60090' },
    { annee: 2000 })
    .then((response) => { console.log(`Update : ${response}`) });


carModel.deleteMany({
    marque: 'Renault'
}).then((response) => { console.log(`Efface les Renault : ${response}`) });


carModel.insertMany([{
    marque: 'Aston Martin',
    modele: 'DB9',
    annee: 2010,
    created: new Date()
},
{
    marque: 'Range Rover',
    modele: 'Discovery Sport',
    annee: 2017,
    created: new Date()
}]);

carModel.find(
    { annee: { $gt: 2015 } }
).then((response) => { console.log(`Les voitures de + de 2015 : ${response}`) });
