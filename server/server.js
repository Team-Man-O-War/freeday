var express = require('express');
var app = express();
var pg = require('pg-hstore');
var connect = require('./db/connection');
var router = require('./router');
require('./db/passport');
app.use(router);
var bodyParser = require('body-parser');
var request = require('request');
var config = require('./config/config.js');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// request({
//     url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=' + config.googleMapApi.key, //URL to hit
//     //qs: {from: 'blog example', time: +new Date()}, //Query string data
//     method: 'GET', //Specify the method
//     headers: { //We can define headers too
//         'Content-Type': 'application/json'
//     }
// }, function(error, response, body){
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(response.statusCode, body);
//     }
// });

// var map = 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=' + config.googleMapApi.key;
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


// if (sequelize.sync()) {
//   console.log('db running');
// } else {
//   console.log('start db');
// }
app.use(express.static('client'));//should serve index.html page.

router.post('/login',function(req,res,done){
  //user.findOne() do i need this here since i have it in passport.js??
});


// if (connect.sync()){ 
//   console.log('Connected to DB.');
// }
// else {
//   console.log("UNABLE TO CONNECT TO DB");
// }
console.log('Connected');

app.listen(3000);

