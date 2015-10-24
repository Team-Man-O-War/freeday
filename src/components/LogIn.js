var React = require('react');
var $ = require('jquery');

var LogIn = React.createClass({//For users logging into app. Will feed into TopBox component. Needs authorization/authentication.
  handleSubmit:function(e){
    e.preventDefault();
    var userInput = {};
    var LoginDom = React.findDOMNode(this);
    
    userInput.username = LoginDom.firstChild.children[1].value;
    userInput.password = LoginDom.firstChild.children[2].value;
    
    var jsonifiedInput = JSON.stringify(userInput);
    var _this = this;

    $.ajax({
      url:"/login",
      type:"POST",
      data:jsonifiedInput,
      datatype:'json' ,
      contentType:'application/json',

      success: function(token){
        
        _this.setState({Authorization:"Bearer "+token})

        localStorage.Authorization = _this.state.Authorization

        console.log("this is the something that i am looking for: ",token);
        
      },
      error: function(xhr,ajaxOptions,err){
        alert("error",err);
        console.log(err);
        console.log(xhr.status);
      }
    });

   }, 

   handleFacebook: function () {

    // $.ajax({
    //   url:"/auth/facebook",
    //   type:"GET",
    //   success: function(jwt){
    //     console.log(jwt, 'sjfsdlkj');
    //     //send something from server to client on successful transaction
    //     //i think this is where i need to pass the token to the user's header
    //     window.localStorage.setItem('jwt', jwt);
    //     location.reload();
        
    //   },
    //   error: function(xhr,ajaxOptions,err){
    //     alert("error",err);
    //     console.log(err);
    //     console.log(xhr.status);
    //   }
    // });

   }, 


	render: function(){

    // console.log(localStorage);
    // if (!localStorage.token && !localStorage.jwt) {

      return (
        <div> 
          <label>Log In </label>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder= "username">
              {this.props.children}
            </input>
            <input type="password" placeholder= "password">
              {this.props.children}
            </input>
          </form>

              <button> {this.props.children}Submit</button>
              <br></br>
              <a href="/auth/facebook" class="btn btn-primary" ><span class="fa fa-facebook"></span> Facebook</a>
              <button>{this.props.children}G-Mail</button>
        </div>
      )
    // } else {

    //   return (
    //     <div>

    //     </div>
    //   )
    // }
	}
});

module.exports = LogIn;