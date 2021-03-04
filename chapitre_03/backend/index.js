const express = require('express');
const app = express();
const port = 8000;

app.listen(port, () => {
    console.log('Serveur lancé');
});

const students = [
    {
        name: "Princess",
        firstName: "Peach",
        age: 20,
    },
    {
        name: "King",
        firstName: "Bouh",
        age: 25,
    }
];

app.get('/', (req, res) => {
    res.send('Page accueil');
});

app.get('/students/', (req, res) => {
    res.json(students);
});

app.post('/students', (req, res) => {
    students.push(req.body);
    res.send(`Le nom de l'étudiant a été ajouté`);
})



