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
    res.render('home', { title: "Connection validée" });
});

app.get('/login', (req, res) => {
    res.render('login')
});

app.post('/login', (req, res) => {
    console.log(req.body);
});




