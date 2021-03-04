const express = require('express');
const exphbs = require("express-handlebars");
const app = express();
const port = 8000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.listen(port, () => {
    console.log('serveur lancé');
});

const translations = {
    fr: {
        message: "Bonjour, ca va? ",
        flag: "https://restcountries.eu/data/fra.svg",
    },
    en:
    {
        message: "Hello, what's up? ",
        flag: "https://restcountries.eu/data/gbr.svg",
    },
    es: {
        messsage: "Halo, como esta? ",
        flag: "https://restcountries.eu/data/esp.svg",
    },
}


app.get('/:lang?', (req, res) => {
    res.render('home', { lang: translations[req.params.lang ? req.params.lang : 'fr'], languages: Object.keys(translations) })
});
