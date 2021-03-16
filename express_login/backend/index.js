const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/express_login', () => {
    console.log('BD express_login connecté');
});

app.listen(port, () => {
    console.log('Serveur Login lancé');
});

