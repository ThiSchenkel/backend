const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const userModel = require('./models/users');
const config = require('./config');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(config.mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('BD express_login connecté');
});

app.listen(config.port, () => {
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



app.post('/signup', async (req, res) => {
    try {
        const user = await userModel.findOne({
            email: req.body.email,
        });
        if (user) {
            res.status(400).send({ message: `L'adresse mail ${req.body.email} a déjà été créée` });
            return;
        }
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
        res.status(400).json({ message: `Soucis dans l'inscription` })
    }
});


app.post('/login', async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email });
        if (bcryptjs.compareSync(req.body.password, user.password)) {
            const token = jwt.sign({ id: user._id }, config.secret, { expiresIn: 3600 }
            );
            res.status(200).json({
                message: "Vous êtes bien connectés", token: token,
            });
        } else {
            res.status(401).send({ message: `Mot de passe incorrect` });
        }
    } catch (error) {
        res.status(400).send({ message: `Soucis de connection` });
    }
});


app.get('/admin', async (req, res) => {
    try {
        const token = req.headers.authorization;
        console.log(token);
        const result = jwt.verify(token.split('')[1], config.secret);
        console.log(result)
    } catch (error) {
        return res.status(400).send({ message: `Vous n'avez pas les autorisations nécessaire` })
    }
});


app.delete('/users/:id', async (req, res) => {
    await userModel.deleteOne({ _id: req.params.id }).exec();
    res.send('ID annulé')
});
