const express = require('express'); //on appelle express, que nous avons installé avec node/npm

const app = express(); //créer l'app express

app.use((req, res) => {
    res.json({message: "Votre requete a bien ete recue"});
});

module.exports = app; //on export pour y accéder depuis les autres fichier
