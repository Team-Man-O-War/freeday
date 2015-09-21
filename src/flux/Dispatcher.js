var $ = require('jquery');
var EventEmitter = require('events').EventEmitter;
var Dispatcher = require('flux').Dispatcher;
AppDispatcher = new Dispatcher();


// onload fetch api

AppDispatcher.getMeetupData = function (cb) {
  $.get('/meetup', function (data) {
    cb(data);
  }.bind(this));
};
// checks for authenticated user
AppDispatcher.handleLogin = function() {

  var loggedIn = false;

  if (localStorage.jwt) {
    loggedIn = true;
  }

  if (loggedIn === false) {
    console.log('NO ONE IS LOGGED IN!!');
    console.log('NO ONE IS LOGGED IN!!');
    console.log('NO ONE IS LOGGED IN!!');
  }
  if (loggedIn === true) {
    console.log('user has logged in!');
    console.log('user has logged in!');
    console.log('user has logged in!');

  }
};






// user logged out


module.exports = AppDispatcher;