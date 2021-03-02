const express = require('express');
const expressHandlebars = require("express-handlebars");
const app = express();
const port = 8000;

app.listen(port, () => {
    console.log('serveur lancé');
});
// app.use(express.static('public'));

app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/login', (req, res) => {
    res.render('login')
});

app.use(express.urlencoded({ extended: true }))
app.post('/login', (req, res) => {
    console.log(req.body);
})


