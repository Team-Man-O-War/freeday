var React = require('react');
var Radium = require('radium');
var $ = require('jquery');


var LogIn = React.createClass({//For users logging into app. Will feed into TopBox component. Needs authorization/authentication.
  handleSubmit:function(e){
    e.preventDefault();
    var userInput = {};
    var signUpDom = React.findDOMNode(this);
    
    userInput.username = signUpDom.firstChild.children[1].value;
    userInput.password = signUpDom.firstChild.children[2].value;
    
    var jsonifiedInput = JSON.stringify(userInput);

    $.ajax({
      url:"/login",
      type:"POST",
      data:jsonifiedInput,
      datatype:'json' ,
      contentType:'application/json',
      success: function(something){
        //send something from server to client on successful transaction
        //i think this is where i need to pass the token to the user's header
        console.log("this is the something that i am looking for: ",something);

        
      },
      error: function(xhr,ajaxOptions,err){
        alert("error",err);
        console.log(err);
        console.log(xhr.status);
      }
    })

   }, 
	render: function(){
		return (
      <div> 
        <label>Log In </label>
          <input type="text" placeholder= "username" style={styles.input1}>
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
    padding: '.3em .5em .3em .5em',
    margin: '0 0 0 .2em',
    fontFamily: 'Verdana',

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
    margin: '0 .5em 0 1.2em',
    padding: '.3em',
    fontFamily: 'Verdana'
  },

    input2: {
    backgroundColor: 'seashell',
    color: 'black',
    borderRadius: 6,
    padding: '.3em',
    fontFamily: 'Verdana'
  },

facebook: {
  backgroundColor: '#3b5998',
  color: 'white',
  borderRadius: 4,
  margin: '1.3em .5em 0 12.6em',
  padding: '.6em',
  fontFamily: 'Verdana'
},

gmail: {
  backgroundColor: 'crimson',
  color: 'white',
  borderRadius: 4,
  margin: '1.3em 0 0 0',
  padding: '.6em',
  fontFamily: 'Verdana'
},
};

module.exports = Radium(LogIn);