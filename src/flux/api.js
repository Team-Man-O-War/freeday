var $ = require('jquery');

module.exports = {
  getMeetupApi: function () {
    $.get('/meetup', function (data) {
      console.log(data);
    });
  }
};