const express = require('express');
const exphbs = require("express-handlebars");
const lang = require("./translations.json");
const app = express();
const port = 8001;

app.listen(port, () => {
    console.log('serveur lancé');
});
// app.use(express.static('public'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/:lang?', (req, res) => {

    res.render('home');
});
