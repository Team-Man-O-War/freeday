var React = require('react');
var CreateEvent = require('./CreateEvent');
var SignUp = require('./SignUp');
var LogIn = require('./LogIn');
var Clock = require('./Clock');
var CategoryBar = require('./CategoryBar.js');

// Top of the page, with CreateEvent, login/user & logo/title. 
//Will pull from createevent/login/register components. 

var Header = React.createClass({
	render: function(){
		return (
      <div>
      {this.props.children}
      <h1><a href=''>freeday</a></h1>
        <CreateEvent/> 

        <Clock/>
        <CategoryBar/>
      </div>
		)
	}
});

  // <SignUp/>
  // <LogIn/> 

module.exports = Header;