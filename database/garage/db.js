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
    )
        .catch(error => console.log(error));
});


CarModel.findById('60464fa3aa1be0476427bdb8')
    .then((response) => console.log(response));

CarModel.updateOne(
    {
        _id
            :
            '60464fa3aa1be0476427bdb8'
    },
    { annee: 2000 }
)
    .then((response) => { console.log(response) });
