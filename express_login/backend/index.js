const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userModel = require('./models/users');


app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/express_login', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('BD express_login connecté');
});

app.listen(port, () => {
    console.log('Serveur Login lancé');
});


app.get('/', (req, res) => {
    res.send('Page accueil');

});

app.post('/users', async (req, res) => {
    try {
        await userModel.create(req.body);
        res.status(200).send({ message: 'Votre demande de login a bien été enregistrée' })
        console.log(req.body);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'ça va pas' })
    }
});
