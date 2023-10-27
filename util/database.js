// Como utilizar la herramienta ORM sequelize
const Sequelize = require('sequelize');
const {applyRelations} = require('./relations');

//Configurar la conexión
const sequelize = new Sequelize('semanatec', 'admin', 'ferrari-95', {
    dialect: 'mysql',
    host:'database-1.cgmblvstxp25.us-east-1.rds.amazonaws.com',
    define: {
        //Evitar que nos ponga createdAt y updateAt
        timestamps:false,
        //Pluralizar
        freezeTableName:true
    }
});

// Cargar Modelos
const modelDefiners = [
    require('../models/persona'),
    require('../models/proyecto'),
    require('../models/proyectoPersona')
];

// Asociar o vincular el modelo con el objeto de conexión
for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}


// Construir las relaciones
applyRelations(sequelize);

//exportar el elemento de conexión
module.exports = sequelize;

