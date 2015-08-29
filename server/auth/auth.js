var morgan = require('morgan');
var bodyParser= require('body-parser');
var jwt = require('jsonwebtoken');
var Sequelize = require('sequelize');
var connect = require('../db/connection.js');
var port = process.env.PORT || 3000;
 //this will be user to connect to user model
var db = require('../db/db.js');


var user = db.User;



//Sequelize.connect(db.User); // <--finish this connection 