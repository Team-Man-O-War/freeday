var React = require('react');

var SignUp = React.createClass({//For users signing up for app. Will feed into TopBox component. Needs authentication/authorization.
	render: function(){
		return (
      <div>
        <label>Sign Up </label>
          <input type="email" placeholder= "e-mail"/>
          <input type="password" placeholder= "password"/>
            <button>Submit</button>
      </div>
		)
	}
});

module.exports = SignUp;