// Como utilizar la herramienta ORM sequelize
const Sequelize = require('sequelize');

//Configurar la conexión
// mysql -u admin -h -P 3306 -p

const sequelize = new Sequelize('semanatec', 'admin', 'ferrari-95', {
    dialect: 'mysql',
    host:'database-1.cgmblvstxp25.us-east-1.rds.amazonaws.com',
    define: {
        //Evitar que nos ponga createdAt y updateAt
        timestamps:true,
        //Pluralizar
        freezeTableName:false
    }
});

const Ejemplo = sequelize.define('Ejemplo', {
    idTrabajo:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    descripcion:{
        type: Sequelize.STRING,
        allowNull:true
    }
})

//Pruebas de conexión
sequelize.sync()
    .then(result => {
        console.log("Conexión Exitosa");
    })
    .catch(error => {
        console.log(error)
    })

const Ejemplo2 = sequelize.define('Ejemplo', {
    idTrabajo:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    descripcion:{
        type: Sequelize.STRING,
        allowNull:true
    }
})