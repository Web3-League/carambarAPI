const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Blague = sequelize.define('Blague', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  blague: {
    type: DataTypes.STRING,
    maxLength: 250,
  },
  reponse: {
    type: DataTypes.STRING,
    maxLength: 150,
  }
  
});

module.exports = Blague;
