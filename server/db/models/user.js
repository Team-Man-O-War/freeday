var Sequelize = require('sequelize');
var database = require('../connection.js');


var User = database.define('user',{

  username:{
    type: Sequelize.STRING,
    field:'username'
  },
  password:{
    type: Sequelize.STRING,
    field:'password'
  },
  address:{
    type:Sequelize.STRING,
    field:'address'
  },

});

module.exports = User;
