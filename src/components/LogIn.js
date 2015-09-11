var React = require('react');
var Radium = require('radium');

var LogIn = React.createClass({//For users logging into app. Will feed into TopBox component. Needs authorization/authentication.
	render: function(){
		return (
      <div> 
        <label>Log In </label>
          <input type="email" placeholder= "e-mail" style={styles.input1}>
            {this.props.children}
            </input>
          <input type="password" placeholder= "password" style={styles.input2}>
            {this.props.children}
            </input>
            <button style={styles.base}>
            {this.props.children}Submit</button>
            <br></br>
            <button style={styles.facebook}>
            {this.props.children}Facebook</button>
            <button style={styles.gmail}>
            {this.props.children}G-Mail</button>
      </div>
		)
	}
});

var styles = {
  base: {
    background: 'steelblue',
    border: 0,
    borderRadius: 8,
    color: 'black',
    padding: '.3em',
    paddingLeft: '.5em',
    paddingRight: '.5em',
    marginLeft: '.2em',

    ':hover': {
      backgroundColor: 'powderblue'
    },

    ':focus': {
      backgroundColor: 'steelblue'
    },

    ':active': {
      backgroundColor: 'midnightblue'
    },
  },

    input1: {
    backgroundColor: 'seashell',
    color: 'black',
    borderRadius: 6,
    marginRight: '.5em',
    marginLeft: '1.2em',
    padding: '.3em',
  },

    input2: {
    backgroundColor: 'seashell',
    color: 'black',
    borderRadius: 6,
    padding: '.3em',
  },

facebook: {
  backgroundColor: '#3b5998',
  color: 'white',
  borderRadius: 4,
  marginLeft: '11.4em',
  marginRight: '.5em',
  marginTop: '1.3em',
  padding: '.6em',
},

gmail: {
  backgroundColor: 'crimson',
  color: 'white',
  borderRadius: 4,
  marginTop: '1.3em',
  padding: '.6em',
},
};

module.exports = Radium(LogIn);