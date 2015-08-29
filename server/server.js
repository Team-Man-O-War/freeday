var express = require('express');
var app = express();
var pg = require('pg-hstore');
var connect = require('./db/connection.js');
var router = require('./router.js');

app.use(router);

if (connect.sync()){ 
  console.log('Connected to DB.');
}
else {
  console.log("UNABLE TO CONNECT TO DB");
}

app.listen(3000);
