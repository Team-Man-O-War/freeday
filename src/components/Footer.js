var React = require('react');

//Bottom of the page div for additional information/options.
var Footer = React.createClass({
	render: function(){
		return (
      <div>
      //////////
      FOOTER GOES HERE
      //////////
      {this.props.children}
      </div>
		)
	}
});

module.exports = Footer;