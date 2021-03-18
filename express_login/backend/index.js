const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const cors = require('cors');
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const userModel = require('./models/users');

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
        const user = await userModel.find().lean().exec();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: `Connection impossible` })
    }
});

app.post('/users', async (req, res) => {
    try {
        await userModel.create({
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password),
            firstName: req.body.firstName,
            surName: req.body.surName,
            birth: req.body.birth,
        });
        res.status(200).send({ message: 'Votre demande inscription a bien été enregistrée' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: `Adresse mail ou/et mot de passe déjà attribués` })
    }
});


app.delete('/users/:id', async (req, res) => {
    await userModel.deleteOne({ _id: req.params.id }).exec();
    res.send('ID annulé')
});