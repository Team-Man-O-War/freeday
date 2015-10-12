var React = require('react');
var Radium = require('radium');

//Bottom of the page div for additional information/options.
var BottomBox = React.createClass({
	render: function(){
		return (
      <div style={styles.base}>
      {this.props.children}
      </div>
		)
	}
});

//Radium in-line styling
var styles = {
  base: {
    background: 'lightsteelblue',
    padding: '3%',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    fontFamily: 'Verdana'
  },
};

module.exports = Radium(BottomBox);