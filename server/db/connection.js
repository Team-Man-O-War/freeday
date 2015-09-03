var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://localhost/freeday');


module.exports = sequelize;