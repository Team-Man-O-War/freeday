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
    // User.findOrCreate wont fire unless data is sent back
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
       //i belive the token should be passed in router.post/login below
       // commented out above on 9/15/2015 
        console.log(user, 'user logged in');
        return done(null, user);//where does token go once its returned
      });
    }
));

//  successRedirect : '/', // redirect to the secure profile section
//  failureRedirect : '/login', // redirect back to the signup page if 

router.post('/login',function(req,res,next){
 passport.authenticate('local',function(req,res,info) {
  if(err){
    return next(err);
  }
  if(!user){
    return res.json(401,{error:'message'});
  }
  var token = jwt.sign({username: user.username}, secret);
  res.json({ token : token });
  //here the token should be passed into the response header

})(req,res,next);
});


router.post('/signup', function (req, res, next) {
  User.find({where: {username: req.body.username}}).then(function (err, user) {
    if (err) {
      throw(err);
    }

    if (user) {
      res.send('username is taken');
    } else {
      //var token = jwt.sign({username: user.username}, secret);
      User
        .create({username: req.body.username, password: req.body.password, address: req.body.address})
        .then(function (user) {
           var token = jwt.sign({username: user.username}, secret);
           console.log(token);
           //here the token is generated and sent to the client side
          res.send(token)
        });   
    } 
  });
});

router.get('/test', function(req,res,next){
  console.log(req.headers)
})






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
      User.findOne({where: {fbid: profile.id}}).then(function(err, user) {
        //err
        if (err)
          return done(err);
        if (user) {
          return done(null, user);
        } else {
        User
          .create({fbid: profile.id, token: token, username: profile.name})
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
