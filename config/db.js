const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,     // nombre de la base de datos
  process.env.DB_USER,     // usuario de MySQL
  process.env.DB_PASSWORD, // contraseña
  {
    host: process.env.DB_HOST, // normalmente localhost
    dialect: 'mysql',
    logging: false,
  }
);

module.exports = sequelize;

