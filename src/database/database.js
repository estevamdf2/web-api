const Sequelize = require("sequelize");
const environment = process.env.NODE_ENV || "development";
const config = require("../config/config.js");

const sequelize = new Sequelize(
    config.development.database.name,
    config.development.database.user,
    config.development.database.password,
    {
      host: config.development.database.host,
      dialect: config.development.database.dialect
    }
);
module.exports = sequelize;
