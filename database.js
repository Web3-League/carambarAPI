const Sequelize = require('sequelize');

const sequelize = new Sequelize('blagues', null, null, {
  dialect: 'sqlite',
  storage: 'Blagues.db',
  loggin: false,
})


module.exports = sequelize;