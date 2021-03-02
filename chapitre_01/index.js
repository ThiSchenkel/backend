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








//  Exercice 1
// const tableau = [
//     {
//         id: 1,
//         authors: "Lawrence Nowell , UK",
//     },
//     {
//         id: 2,
//         authors: "William Shakespeare, ",
//     },
//     {
//         id: 3,
//         authors: "Charles Dickens, US",
//     },
//     {
//         id: 4,
//         authors: "Oscar Wilde, UK",
//     },
// ];


// app.get("/authors/:id", (req, res) => {

//     const id = tableau.map((element) => {
//         return element.authors;
//     }); console.log(id.join(","))
//     res.send(`${id.join(",")}`);
// });


// Exercice 2

app.get("/authors/1/books", (req, res) => {
    res.send(`Beowulf `);
});

app.get("/authors/2/books", (req, res) => {
    res.send(`Hamlet, Othello, Romeo and Juliet, MacBeth `);
});

app.get("/authors/3/books", (req, res) => {
    res.send(`Oliver Twist, A Christmas Carol `);
});

app.get("/authors/4/books", (req, res) => {
    res.send(`The Picture of Dorian Gray, The Importance of Being Earnest `);
});

app.get("*", (req, res) => {
    res.send(`ERROR `);
});



