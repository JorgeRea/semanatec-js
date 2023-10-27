// Importar bibliotecas
const express = require("express");
const app = express();
const personaRoutes = require('./routes/persona')
const proyectoRoutes = require('./routes/proyecto')

//Objeto de conexión
const sequelize = require('./util/database');

//middleware
app.use(express.json());
app.use('/persona', personaRoutes)
app.use('/proyecto', proyectoRoutes)

// Malas prácticas
// app.get('/test', (request,response) => {
//     console.log("Esto no se debe de hacer, pero funciona")
//     response.send('<h1>Servidor Funcionando</h1>');
// });

//levantar el server y escuchar peticiones
sequelize.sync()
    .then(result => {
        app.listen(8080, () => {
            console.log("Servidor escuchando")
        })
    })
    .catch(error => console.log(error))