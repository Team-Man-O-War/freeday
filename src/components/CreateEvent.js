var React = require('react');

var CreateEvent = React.createClass({//Component in TopBox that allows user to create event and store into database.
	render: function(){
		return (
      <div>
        <button class="newevent">Create Event!</button>//(If signed in, will open modal or lead to page to create event.)
      </div>
		)
	}
});

module.exports = CreateEvent;