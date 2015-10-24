var React = require('react');
var CreateEvent = require('./CreateEvent');
var SignUp = require('./SignUp');
var LogIn = require('./LogIn');
var Clock = require('./Clock');
var Radium = require('radium');

// Top of the page, with CreateEvent, login/user & logo/title. 
//Will pull from createevent/login/register components. 

var TopBox = React.createClass({
	render: function(){
		return (
      <div style={styles.base}>
      {this.props.children}
      <h1 style={styles.logo}><a href=''>freeday</a></h1>
        <CreateEvent/> 

        <Clock/>
      </div>
		)
	}
});

  // <SignUp/>
  // <LogIn/> 

//Radium in-line styling
var styles = {
  base: {
    background: 'lightsteelblue',
    padding: '2%',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    margin: '0 0 .2% 0',
    fontFamily: 'Verdana'
  },
  logo: {
    fontSize: 80,
    fontFamily: 'Papyrus',
    margin: '2.5% 0 0 7%'
  }
};

module.exports = Radium(TopBox);