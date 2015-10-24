var React = require('react');

//Bottom of the page div for additional information/options.
var BottomBox = React.createClass({
	render: function(){
		return (
      <div>
      //////////
      BOTTOM BOX GOES HERE
      //////////
      {this.props.children}
      </div>
		)
	}
});

module.exports = BottomBox;