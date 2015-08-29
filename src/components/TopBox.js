var React = require('react');
var CreateEvent = require('./CreateEvent');
var SignUp = require('./SignUp');
var LogIn = require('./LogIn');

// Top of the page, with CreateEvent, login/user & logo/title. 
//Will pull from createevent/login/register components. 

var TopBox = React.createClass({
	render: function(){
		return (
      <div id="topbox">
        TopBox:
        <CreateEvent/> 
        <SignUp/>
        <LogIn/> 
      </div>
		)
	}
});

module.exports = TopBox;