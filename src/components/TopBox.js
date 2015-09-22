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
        <SignUp/>
        <LogIn/> 
        <Clock/>
      </div>
		)
	}
});

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
    margin: '0 0 .3% 8.8%'
  }
};

module.exports = Radium(TopBox);