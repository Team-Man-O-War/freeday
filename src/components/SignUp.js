var React = require('react');
var $ = require('jquery');
//require jquery and use it to send post request



var SignUp = React.createClass({//For users signing up for app. Will feed into TopBox component. Needs authentication/authorization.
  handleSubmit:function(e){
    e.preventDefault();
    var userInput = {};
    var signUpDom = React.findDOMNode(this);
    
    userInput.username = signUpDom.firstChild.children[1].value;
    userInput.password = signUpDom.firstChild.children[2].value;
    console.log(userInput);

    $.ajax({
      url:"/signup",
      type:"POST",
      data:userInput,
      datatype:'json' ,
      contentType:'application/json',
      success: '',
      error: ''
    })


  },
	render: function(){
		return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Sign Up </label>
          <input type="email" placeholder= "e-mail"/>
          <input type="password" placeholder= "password"/>
          <input type="submit" value="Submit"/>
        </form>    
      </div>
		)
	}
});

module.exports = SignUp;