const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connectDB.js');
class User extends Model {}
class Address extends Model{}
User=sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    DOB: DataTypes.TEXT,
    Age: {
        type: DataTypes.INTEGER,
        validate: {
            isNumeric: false
        }
    }
}, {
    sequelize, 
    modelName: 'User',
    freezeTableName: true
});

// User.sync({ force: true });
// User.drop()
module.exports = User;
