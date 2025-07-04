const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Repuesto = sequelize.define('Repuesto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  codigo_barras: {
    type: DataTypes.STRING,
    unique: true,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  stock_actual: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  stock_minimo: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
}, {
  timestamps: true,
});

module.exports = Repuesto;
