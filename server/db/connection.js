var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://localhost/freedayDB');

module.exports = sequelize;