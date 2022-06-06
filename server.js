const http = require('http'); //importer le package http de node
// nous avons désormais accés a l'objet 'http' qui nous permet de créer un serveur
const app = require('./app'); //importe le fichier.app

app.set("port", process.env.PORT || 3000)
const server = http.createServer(app)  // cette fonction sera appeler a chaque fois qu'on fait une requête a ce serveur

server.listen(process.env.PORT || 3000); // Le serveur doit 'écouter un port, par défaut 3000, sinon pour les autre c'est la syntaxe juste devant 3000
