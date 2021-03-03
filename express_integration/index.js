const express = require('express');
const exphbs = require("express-handlebars");
const app = express();
const port = 8001;

app.listen(port, () => {
    console.log('serveur lancé');
});