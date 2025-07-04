const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');  // Usar la instancia de sequelize

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rol: {
    type: DataTypes.ENUM('admin', 'mecanico', 'repositor'),
    defaultValue: 'mecanico',
  },
}, {
  timestamps: true,
});

module.exports = User;
