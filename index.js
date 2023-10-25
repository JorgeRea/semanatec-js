// Importar bibliotecas
const express = require("express");
const app = express();

//middleware
app.use(express.json());

// Malas prácticas
app.get('/test', (request,response) => {
    console.log("Esto no se debe de hacer, pero funciona")
    response.send('<h1>Servidor Funcionando</h1>');
})

//levantar el server y escuchar peticiones
app.listen(8080, () => {
    console.log("Servidor escuchando");
})