const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('firstDB', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',

});

module.exports = sequelize;