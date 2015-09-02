var React = require('react');

var LogIn = React.createClass({//For users logging into app. Will feed into TopBox component. Needs authorization/authentication.
	render: function(){
		return (
      <div> 
        <label>Log In </label>
          <input type="email" placeholder= "e-mail"/>
          <input type="password" placeholder= "password"/>
            <button>Submit</button>
            <br></br>
            <button>Log In with Facebook</button>
            <button>Log In with G-Mail</button>
      </div>
		)
	}
});

module.exports = LogIn;