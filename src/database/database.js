const Sequelize = require("sequelize");
const environment = process.env.NODE_ENV || "development";
const config = require("../config/config.js")[environment];
const sequelize = new Sequelize(
    // console.log('sequelize');
    
    config.database.user,
    config.database.password,
    {
      host: 'localhost',
      dialect: 'mysql'
    }
);
console.log('database');
module.exports = sequelize;
