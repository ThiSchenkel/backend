const express = require('express');
const app = express();

const tableau = [
    {
        id: "1",
        authors: "Lawrence Nowell , UK",
        books: "Beowulf",
    },
    {
        id: "2",
        authors: "William Shakespeare, ",
        books: "Hamlet, Othello, Romeo and Juliet, MacBeth",
    },
    {
        id: "3",
        authors: "Charles Dickens, US",
        books: "Oliver Twist, A Christmas Carol",
    },
    {
        id: "4",
        authors: "Oscar Wilde, UK",
        books: "The Picture of Dorian Gray, The Importance of Being Earnest",
    }
];

app.listen(8000, () => {
    console.log('serveur lancé');
});

app.get("/", (req, res) => {
    res.send("Authors API");
});

// app.get("/authors/:id", (req, res) => {
//     switch (req.params.id) {
//         case '1':
//             res.send("Lawrence Nowell , UK")
//             break;
//         case '2':
//             res.send("William Shakespeare, UK")
//             break;
//         case '3':
//             res.send("Charles Dickens, US")
//             break;
//         case '4':
//             res.send("Oscar Wilde, UK")
//             break;
//         default:
//             res.send(`ERROR, this ID ${req.params.id} does not exist`)
//     }
// });

// app.get("/authors/:id/books", (req, res) => {
//     switch (req.params.id) {
//         case '1':
//             res.send("Beowulf")
//             break;
//         case '2':
//             res.send("Hamlet, Othello, Romeo and Juliet, MacBeth")
//             break;
//         case '3':
//             res.send("Oliver Twist, A Christmas Carol")
//             break;
//         case '4':
//             res.send("The Picture of Dorian Gray, The Importance of Being Earnest")
//             break;
//     }
// });

app.get("/json/authors/:id", (req, res) => {
    res.send(tableau[req.params.id].authors)
});

app.get("/json/authors/:id/books", (req, res) => {
    res.send(tableau[req.params.id].books)
});

app.get("*", (req, res) => {
    res.send(`ERROR - PAGE NOT FOUND`);
});



