var $ = require('jquery');
var EventEmitter = require('events').EventEmitter;
var Dispatcher = require('flux').Dispatcher;
AppDispatcher = new Dispatcher();

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
// onload fetch api

AppDispatcher.getMeetupData = function (cb) {
  $.ajax({
    url: '/meetup',
    headers: {'Authorization': getCookie('jwt')},
    success: function (data) {
      cb(data);
    }
  });
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