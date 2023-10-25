const Sequelize = require('sequelize');

const ProyectoPersona = (sequelize) => {
    sequelize.define('proyectopersona', {
        estado: {
            type: Sequelize.STRING(20)
        }
    })
};

module.exports = ProyectoPersona;