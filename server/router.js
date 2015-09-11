var Router = require('express').Router;
var db = require('./db/db.js');
var User = db.User;
var Event = db.Event;
var Category = db.Category;
var router = new Router();
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var passport =  require('passport');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');
var config = require('./config/config.js');
var secret = config.secret.shh;


router.post('/login', passport.authenticate('local', {
  successRedirect : '/', // redirect to the secure profile section
  failureRedirect : '/login', // redirect back to the signup page if 
}));

passport.use(new LocalStrategy(
  function(username, password, done) {
    // User.findOrCreate wont fire unless data is sent back
    User.find({where: {username: username}})
      .then(function(user) {
        // console.log(user.password);
        // console.log(password);
        if (!user) {
          console.log('user not found');
          return done(null, false, {message: "The user is not exist"});
        } 
        if (!bcrypt.compareSync(password, user.password)) {
          console.log('invalid pass...');
          return done(null, false, {message: "Wrong password"});
        } 
        console.log('all good dog');
        var token = jwt.sign({username: user.username}, secret);
        // res.json({success: true, message: 'Enjoy!', token : token });
        console.log(user, ' user logged in');
        return done(null, token);
      });
    }
));

router.post('/signup', function (req, res, next) {
  User.find({where: {username: req.body.username}}).then(function (err, user) {
    if (err) {
      return next(err);
    }

    if (user) {
      res.send('username is taken');
    } else {
      var token = jwt.sign({username: user.username}, secret);
      User
        .create({username: req.body.username, password: req.body.password, address: req.body.address})
        .save(req.body)
        .then(function (user) {
          res.send(user)
        .catch(function (error) {
            if (error) {
              res.send(error);
            }
          });
        });
    } 
  });
});

router.get('/auth/facebook', passport.authenticate('facebook'));
router.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/'
  }));

passport.use(new FacebookStrategy({
  clientID : config.fb.clientID,
  clientSecret: config.fb.clientSecret,
  callbackURL: config.fb.callbackURL
},
  function(token, refreshToken, profile, done) {
    process.nextTick(function() {
      User.findOne({where: {fbID: profile.id}}).then(function(err, user) {
        //err
        if (err)
          return done(err);
        if (user) {
          return done(null, user);
        } else {
        User
          .create({fbID: profile.id, token: token, username: profile.name})
          .save()
          .then(function(user) {
            return done(null, user);
          });
        }
      });
    });
  }
));


module.exports = router;
