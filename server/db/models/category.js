var Sequelize = require('sequelize');

var database = require('../connection.js');

var Category = database.define('category',{
  name:Sequelize.STRING,
  field:'name'
});

module.exports = Category;
