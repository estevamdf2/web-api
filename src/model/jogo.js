
const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const Jogo = sequelize.define("Jogo", {
id: {
  allowNull: false,
  primaryKey: true,
  type: Sequelize.INTEGER
},

nome: {
  allowNull: false,
  type: Sequelize.STRING(255),
  validate: {
    len: [2, 255]
  }
},

score: {
  allowNull: false,
  type: Sequelize.INTEGER
}

}); //Fecha sequelize define
module.exports = Jogo;
