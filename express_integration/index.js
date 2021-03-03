const express = require('express');
const exphbs = require("express-handlebars");
const app = express();
const port = 8001;

app.listen(port, () => {
    console.log('serveur lancé');
});

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/home', (req, res) => {
    res.render('home', { title: "Cui'zine" });
});

app.get('/team', (req, res) => {
    res.render('team');
});

app.get('/team-member', (req, res) => {
    res.render('team-member');
});

app.get('/recipe', (req, res) => {
    res.render('recipe');
});

app.get('/post', (req, res) => {
    res.render('post');
});

app.get('/page2', (req, res) => {
    res.render('page2');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});