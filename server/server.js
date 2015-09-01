var express = require('express');
var app = express();
var pg = require('pg-hstore');
var connect = require('./db/connection');
var router = require('./router');
require('./db/passport');
app.use(router);

if (connect.sync()){ 
  console.log('Connected to DB.');
}
else {
  console.log("UNABLE TO CONNECT TO DB");
}


router.post('/login',function(req,res,done){
  //user.findOne() do i need this here since i have it in passport.js??***********************************
})





app.listen(3000);
