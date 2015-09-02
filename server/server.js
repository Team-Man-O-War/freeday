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

var map = 'https://www.googleapis.com/geolocation/v1/geolocate?key=' + config.googleMapApi.key;
app.post('/map', function(req, res) {
  request.get({map: map}, function(err, response, body) {
      res.send(map);
    });
});


// if (sequelize.sync()) {
//   console.log('db running');
// } else {
//   console.log('start db');
// }
// app.use(express.static('client'));//should serve index.html page.

<<<<<<< HEAD
// var connect = require('./db/connection.js');
// var router = require('./router.js');
// requires below I have added for jsonwebtokens -arash

// app.use(router);
=======
router.post('/login',function(req,res,done){
  //user.findOne() 
  //do i need this here since i have it in passport.js??



});

>>>>>>> b597d03a255efe95672c5a27c16152c23cdf9aa0




// if (connect.sync()){ 
//   console.log('Connected to DB.');
// }
// else {
//   console.log("UNABLE TO CONNECT TO DB");
// }
console.log('Connected');

app.listen(3000);

