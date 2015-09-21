var Sequelize = require('sequelize');
var sequelize = require('../connection');
var bcrypt = require('bcrypt-nodejs');

var User = sequelize.define('user',{

  username:{
    type: Sequelize.STRING,
    field:'username'
  },
  fbID: {
    type: Sequelize.STRING,
    unique: true,
    field: 'fbID'
  },
  password:{
    type: Sequelize.STRING,
    set: function(v) {
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(v, salt);
      this.setDataValue('password', hash);
    }
  },
  address:{
    type: Sequelize.STRING,
    field:'address'
  },
});

module.exports = User;
