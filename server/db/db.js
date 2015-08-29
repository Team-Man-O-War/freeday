//Database info will go here
var User = require('./models/user.js');
var Event = require('./models/event.js');
var Category = require('./models/category.js');

//here we have to set up user.sync, we sync our schemas to become tables

User.sync({force:true}).then(function(){
  //table is created
  // return User.create({
  //   username: 'arash',
  //   password: 'arash is cool'

  // })
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

var db = {
  User: User,
  Event: Event,
  Category: Category
};

module.exports = db;