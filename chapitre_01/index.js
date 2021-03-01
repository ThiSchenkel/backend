const express = require('express');

const app = express();
app.listen(8000, () => {
    console.log('serveur lancé');
});


// Exercice 0
app.get("/", (req, res) => {
    console.log(req);
    res.send("Authors API");
});


//  Exercice 1
app.get("/authors/1", (req, res) => {
    res.send(`Lawrence Nowell, UK `);
});

app.get("/authors/2", (req, res) => {
    res.send(`William Shakespeare, UK `);
});

app.get("/authors/3", (req, res) => {
    res.send(`Charles Dickens, US `);
});

app.get("/authors/4", (req, res) => {
    res.send(`Oscar Wilde, UK `);
});

