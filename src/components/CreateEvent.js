var React = require('react');
// var Event = require('./Event');

var CreateEvent = React.createClass({//Component in TopBox that allows user to create event and store into database.
	render: function(){
		return (
      <div>
        <button class="newEvent">Create Event!</button>//(Will open modal of Event component with onClick)
      </div>
		)
	}
});

module.exports = CreateEvent;