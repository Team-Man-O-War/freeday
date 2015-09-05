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
    var jsonifiedInput = JSON.stringify(userInput);
    //the json.stringify sends the correct form
   

    $.ajax({
      url:"/signup",
      type:"POST",
      data:jsonifiedInput,
      datatype:'json' ,
      contentType:'application/json',
      success: function(something){
        //send something from server to client on successful transaction
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