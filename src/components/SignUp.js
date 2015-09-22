var React = require('react');
var Radium = require('radium');
var $ = require('jquery');
//require jquery and use it to send post request

var SignUp = React.createClass({//For users signing up for app. Will feed into TopBox component. Needs authentication/authorization.
  

  handleSubmit:function(e){
    e.preventDefault();
    var userInput = {};
    var signUpDom = React.findDOMNode(this);
    
    userInput.username = signUpDom.firstChild.children[1].value;
    userInput.password = signUpDom.firstChild.children[2].value;
    
    var jsonifiedInput = JSON.stringify(userInput);
    //the json.stringify sends the correct form
   
    var _this = this;

    $.ajax({
      url:"/signup",
      type:"POST",
      data:jsonifiedInput,
      datatype:'json' ,
      contentType:'application/json',
      success: function(token){
        //send something from server to client on successful transaction
       // this.headers.Authorization = "Bearer "+something;
          _this.setState({ Authorization:"Bearer "+token })
          
          localStorage.Authorization = _this.state.Authorization
        //here we place the authorization token in the users local storage
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
        <form onSubmit={this.handleSubmit}>
          <label>Sign Up </label>
          <input type="text" placeholder= "username" style={styles.input1}>
            {this.props.children}
            </input>
          <input type="password" placeholder= "password" style={styles.input2}>
            {this.props.children}
            </input>
          <button style={styles.base}>
            {this.props.children}Submit</button>
        </form>    
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
    padding: '.4% .8% .4% .8%',
    margin: '0 0 0 .5%',
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
    margin: '.2% .7% .2% .7%',
    padding: '.3%',
  },

    input2: {
    backgroundColor: 'seashell',
    color: 'black',
    borderRadius: 6,
    padding: '.3%',
  }
};

module.exports = Radium(SignUp);