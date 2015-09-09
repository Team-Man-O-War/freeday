var React = require('react');
var Radium = require('radium');

var LogIn = React.createClass({//For users logging into app. Will feed into TopBox component. Needs authorization/authentication.
	render: function(){
		return (
      <div> 
        <label>Log In </label>
          <input type="email" placeholder= "e-mail"/>
          <input type="password" placeholder= "password"/>
            <button style={styles.base}>
            {this.props.children}Submit</button>
            <br></br>
            <button>Log In with Facebook</button>
            <button>Log In with G-Mail</button>
      </div>
		)
	}
});

var styles = {
  base: {
    background: 'powderblue',
    border: 0,
    borderRadius: 8,
    color: 'black',
    padding: '.4em',

    ':hover': {
      backgroundColor: 'lightsteelblue'
    },

    ':focus': {
      backgroundColor: 'steelblue'
    },

    ':active': {
      backgroundColor: 'midnightblue'
    },
  },
};

module.exports = Radium(LogIn);