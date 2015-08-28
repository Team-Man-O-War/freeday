var express = require('express');
var app = express();
var pg = require('pg-hstore');
var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://localhost/freeday');

if (sequelize.sync()){ //checks for connection to DB
  console.log('Connected to DB.');
}
else {
  console.log("NOT CONNECTED TO DB");
}

// var passport = require('passport');
// var FacebookStrategy = require('passport-facebook').Strategy;

// app.use(passport.initialize());
// app.use(passport.session());

  // !!Facebook authentication begins
// passport.use(new FacebookStrategy({
//     clientID: FACEBOOK_APP_ID,
//     clientSecret: FACEBOOK_APP_SECRET,
//     callbackURL: "http://localhost:3000/auth/facebook/callback"
//     enableProof: false
//   },
//   function(accessToken, refreshToken, profile, done) {
//     User.findOrCreate({ facebookId: profile.id }, function (err, user) {
//       return done(err, user);
//     });
//   }
// ));

// app.get('/auth/facebook',
//   passport.authenticate('facebook'));

// app.get('/auth/facebook/callback',
//   passport.authenticate('facebook', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
//   }); 
  // !!Facebook authentication ends.


//path? fs? bodyparser? will need FB login & db schema.
// var sequelize = new Sequelize('postgres://localhost/freeday');

// if (sequelize.sync()) {
//   console.log('db running');
// } else {
//   console.log('start db');
// }
app.use(express.static('client'));

app.listen(3000);
