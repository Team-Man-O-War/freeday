// //Database info will go here
var User = require('./models/user.js');
var Event = require('./models/event.js');
var Category = require('./models/category.js');


//here we have to set up user.sync, we sync our schemas to become tables
console.log('hi');



//here we set up the many to many relationship, and name the table UserEvent.

User.belongsToMany(Event,{as:'party',through:'attendee_party',foreignKey:'userId'});

Event.belongsToMany(User,{as:'attendee',through:'attendee_party',foreignKey:'eventId'});

require('./connection').sync();

var db = {
  User: User,
  Event: Event,
  Category: Category
};
//this code above bundles together the db as an object to be exported below but it is useless at the moment


// var db = {
//   User: User,
//   Event: Event,
//   Category: Category
// };


// module.exports = db;
