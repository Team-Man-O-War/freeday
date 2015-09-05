var express = require('express');
var app = express();
var pg = require('pg-hstore');
var connect = require('./db/connection');
require('./db/passport');
var bodyParser = require('body-parser');
var request = require('request');
var config = require('./config/config.js');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var router = require('./router');//sequelise must be loaded before router
app.use(router);


var map = 'https://www.googleapis.com/geolocation/v1/geolocate?key=' + config.googleMapApi.key;

app.post('/map', function(req, res) {
  request.get({map: map}, function(err, response, body) {
      res.send(map);
    });
});

// app.use(express.static('client'));//should serve index.html page.




console.log('Connected');

app.listen(3000);

