const Sequelize = require('sequelize');

const Proyecto = (sequelize) => {
    sequelize.define('proyecto', {
        idProyecto: {
            type: Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },

        nombre: {
            type: Sequelize.STRING(30)
        },
        descripcion: {
            type: Sequelize.STRING
        }
    })
};

module.exports = Proyecto;