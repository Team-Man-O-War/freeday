var express = require('express');
var app = express();
var pg = require('pg-hstore');
var connect = require('./db/connection.js');
var router = require('./router.js');

app.use(router);

if (connect.sync()){ //checks for connection to DB
  console.log('Connected to DB.');
}
else {
  console.log("NOT CONNECTED TO DB");
}

//path? fs? bodyparser? will need FB login & db schema.
// var sequelize = new Sequelize('postgres://localhost/freeday');

// if (sequelize.sync()) {
//   console.log('db running');
// } else {
//   console.log('start db');
// }


app.listen(3000);
