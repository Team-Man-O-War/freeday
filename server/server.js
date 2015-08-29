var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:password@localhost:5432/freedayDB');



var User = sequelize.define('user',{

	username:{
		type: Sequelize.STRING,
		field:'username'
	},
	password:{
		type: Sequelize.STRING,
		field:'password'
	},
	address:{
		type:Sequelize.STRING,
		field:'address'
	},

});

var Event = sequelize.define('event',{

  title:{
    type:Sequelize.STRING,
    field:'title'
  },
  category:{
    type:Sequelize.STRING,
    field:'category'
  },
  time:{
    type:Sequelize.STRING,
    field:'time'
  },
  description:{
    type:Sequelize.STRING,
    field:'description'
  },
  location:{
    type:Sequelize.STRING,
    field:'location'
  },
  tags:{
    type: Sequelize.ARRAY(Sequelize.STRING),
    field:'tags'
  }


});

var Category = sequelize.define('category',{
  name:Sequelize.STRING,
  field:'name'
});

//here we have to set up user.sync, we sync our schemas to become tables
User.sync({force:true}).then(function(){
  //table is created
  return User.create({
    username: 'arash',
    password: 'arash is cool'

  })
});

Event.sync({force:true}).then(function(){
  //table is created
  // return Event.create({
  //   title:
  //   category:
  //   time:
  //   description:
  //   location:
  //   tags:
  // })

});


//here we set up the many to many relationship, and name the table UserEvent.
User.belongsToMany(Event,{as:'party',through:'attendee_party',foreignKey:'userId'});
Event.belongsToMany(User,{as:'attendee',through:'attendee_party',foreignKey:'eventId'});




if(sequelize.sync()){
  console.log("connected")
}

app.use('/', express.static('client'));//should serve index.html page.

app.listen(3000);