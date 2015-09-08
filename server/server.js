var express = require('express');
var app = express();
var pg = require('pg-hstore');
var connect = require('./db/connection');
var bodyParser = require('body-parser');
var request = require('request');
var config = require('./config/config.js');
var router = require('./router');//sequelize must be loaded before router
var User = require('./db/models/user');

require('./db/passport');
app.use(router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/map', function(req, res) {
  request.get('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=' + config.googleMapApi.key, 
    function(err, response, body) {
      res.send(body);
  });
});

app.get('/event', function(req, res) {
  request.get('https://www.eventbriteapi.com/v3/events/search/?q=popular=true&location.latitude=34.0500&location.longitude=118.2500&location.within=2mi&token=' + config.eventBriteApi.token,
    function(err, response, body) {
      res.send(body);
    });
});

app.get('/meetup', function(req, res) {
  request.get('https://api.meetup.com/2/open_events?sign=true&photo-host=public&lat=33.97906&lon=-118.4228&page=20&key=' + config.meetupApi.key,
    function(err, response, body) {
      res.send(body);
    });
});

app.use(express.static('client'));//should serve index.html page.

router.post('/login',function(req,res,done){
  //user.findOne() do i need this here since i have it in passport.js??
});



console.log('Connected');

app.listen(3000);

