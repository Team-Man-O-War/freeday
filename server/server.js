var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var pg = require('pg-hstore');

//path? fs? bodyparser? will need FB login & db schema.
// var sequelize = new Sequelize('postgres://localhost/freeday');

// if (sequelize.sync()) {
//   console.log('db running');
// } else {
//   console.log('start db');
// }
app.use(express.static('client'));//should serve index.html page.





app.listen(3000);