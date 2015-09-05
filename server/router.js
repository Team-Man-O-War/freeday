var Router = require('express').Router;
var express = require('express');
//var Sequelize = require('sequelize');
var db = require('./db/db.js');
var User = require('./db/models/user.js');
var Event = require('./db/models/event.js');
var Category = require('./db/models/category.js');
var router = new Router();
router.use(express.static('client'));


//code below catches post requests from /signup, should be changed to login
router.post('/signup',function(req,res,done){ 

   User.findOrCreate(
    {where: {username:req.body.username},defaults:{username:req.body.username,password:req.body.password}}).spread(function(user,created){
        if(created===false){
          alert("that user exists bruh");
        }
      res.send({message:"good job"})


    })
     .error(function(onError){
     console.log(onError,"error")//need to handle error differently
     });
 
});
  






module.exports = router;
