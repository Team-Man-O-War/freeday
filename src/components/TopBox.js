var React = require('react');
var CreateEvent = require('./CreateEvent');
var SignUp = require('./SignUp');
var LogIn = require('./LogIn');
var Clock = require('./Clock');

// Top of the page, with CreateEvent, login/user & logo/title. 
//Will pull from createevent/login/register components. 

var TopBox = React.createClass({
	render: function(){
		return (
      <div>
      {this.props.children}
      <h1><a href=''>freeday</a></h1>
        <CreateEvent/> 

        <Clock/>
      </div>
		)
	}
});

  // <SignUp/>
  // <LogIn/> 

module.exports = TopBox;