// //Database info will go here
var User = require('./models/User');
var Event = require('./models/Event');
var Category = require('./models/Category');


//here we have to set up user.sync, we sync our schemas to become tables


//here we set up the many to many relationship, and name the table UserEvent.
// User.sync({force: true}).then(function () {
//   // Table created
//   return User.create({
//     firstName: 'John',
//     lastName: 'Hancock'
//   });
// });


// Event.sync();
// Category.sync();
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


module.exports = db;
