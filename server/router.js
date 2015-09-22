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

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.find({where: {username: username}})
      .then(function(user) {
        if (!user) {
          console.log('user not found');
          return done(null, false, {message: "The user is not exist"});
        } 
        if (!bcrypt.compareSync(password, user.password)) {
          console.log('invalid pass...');
          return done(null, false, {message: "Wrong password"});
        } 
        console.log('all good dog');
       // var token = jwt.sign({username: user.username}, secret);
      
        return done(null, user);
      });
    }
));

//  successRedirect : '/', // redirect to the secure profile section
//  failureRedirect : '/login', // redirect back to the signup page if 

router.post('/login',function (req, res, next){
 passport.authenticate('local', function (err, user, info) {
  console.log("looking for me", info);//info is undefined
  if(err){
    return next(err);
  }
  if(!user){
    return res.json(401,{error:'message'});
  }
  var token = jwt.sign({username: user.username}, secret);
 
  res.send(token);

})(req,res,next);
});


router.post('/signup', function (req, res, next) {
  User.find({where: {username: req.body.username}}).then(function (user, err) {
    if (user) {
      res.json({message: 'username is taken'});
    } else {
      //var token = jwt.sign({username: user.username}, secret);
      User
        .create({username: req.body.username, password: req.body.password, address: req.body.address})
        .then(function (user) {
         var token = jwt.sign({username: user.username}, secret);  
           console.log(token);
           //here the token is generated and sent to the client side
          res.send(user, token);
        });   
    } 
  });
});

router.get('/test', function(req,res,next){
  console.log(req.headers);
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
      User.find({where: {fbID: profile.id}}).then(function(user) {
  
        var token = jwt.sign({username: profile.name.givenName}, secret);
        if (user) {
          console.log(token);
          return done(null, user, token);
        } else {

        User
          .create({fbID: profile.id, token: token, username: profile.name.givenName})
          .then(function(user) {
            
            console.log(token);
            return done(null, user, token);
          });
        }
      });
    });
  }
));


module.exports = router;
