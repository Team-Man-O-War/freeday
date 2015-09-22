var $ = require('jquery');
var EventEmitter = require('events').EventEmitter;

var Dispatcher = {
  getMeetupData: function() {
    $.get('/meetup', function (data) {
      console.log(data);
    });
  }
};

module.exports = Dispatcher;