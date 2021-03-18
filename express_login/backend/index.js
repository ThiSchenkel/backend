const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const signupModel = require('./models/signup');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/express_login', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('BD express_login connecté');
});

app.listen(port, () => {
    console.log('Serveur Login lancé');
});


app.get('/', (req, res) => {
    res.send('Home');

});
app.use(express.urlencoded({ extended: true }));
app.get('/users', async (req, res) => {
    try {
        const signup = await signupModel.find().lean().exec();
        res.status(200).json(signup);
    } catch (error) {
        res.status(500).json({ message: `Ca ne va pas du tout!` })
    }
});

app.post('/users/', async (req, res) => {
    if (req.body.password.length < 8) {
        res.status(400).send({ message: `Mot de passe trop court` });
        return;
    }
    if (req.body.password !== req.body.confirmPassword) {
        res.status(400).send({ message: `Ce ne sont pas les mêmes mots de passe` })
    } else {
        res.status(200).send({ message: `Tout est ok` });
    }
    try {
        await signupModel.create(req.body);
        res.status(200).send({ message: 'Votre demande inscription a bien été enregistrée' })
        console.log(req.body);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: `Adresse mail ou/et mot de passe déjà attribués` })
    }
});



app.delete('/users/:id', async (req, res) => {
    await signupModel.deleteOne({ _id: req.params.id }).exec();
    res.send('ID annulé')
});
