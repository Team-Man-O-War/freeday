var Sequelize = require('sequelize');
var database = require('../connection');

var Category = database.define('category',{
  name:Sequelize.STRING,
  field:'name'
});

module.exports = Category;
