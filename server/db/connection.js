var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://localhost:5432/freedayDB',
  {logging:false});

//arash's connection string plz dont delete 
//'postgres://postgres:password@localhost:5432/freedayDB'

module.exports = sequelize;