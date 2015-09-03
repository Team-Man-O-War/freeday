var Router = require('express').Router;
var express = require('express');
require('./db/db.js');
var router = new Router();
var User = require('./db/models/user');
var querystring = require('querystring');
router.use(express.static('client'));


//code below catches post requests from /signup
router.post('/signup',function(req,res,done){ 
  // req.setEncoding('utf8');
  //var data = '';
 req.on('data', function(chunk) {
  console.log(typeof chunk);
    console.log(chunk);

  var stringy = chunk.toString();

  console.log(querystring.parse(stringy));



  })
  req.on('end', function() {
   // console.log(typeof data);
   // var monkey = JSON.parse(data);
    //console.log(monkey);
  });
  // console.log(req.body);
  // User.findOrCreate({username:req.body.username},{password:req.body.password}).success(function(user,created){
  //   res.send({message:"good job"
  //   })
  //   .error(function(onError){
  //   console.log(error,"error")//need to handle error differently
  // });
  // });
});

  








module.exports = router;
