var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var pg = require('pg-hstore');
var bodyParser = require('body-parser');
var request = require('request');
var config = require('./config/config.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/map', function(req, res) {
request.get('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=' + config.googleMapApi.key, function(err, response, body) {
    res.send(body);
  });
});

//path? fs? bodyparser? will need FB login & db schema.
// var sequelize = new Sequelize('postgres://localhost/freeday');

// if (sequelize.sync()) {
//   console.log('db running');
// } else {
//   console.log('start db');
// }
app.use(express.static('client'));//should serve index.html page.

app.listen(3000);