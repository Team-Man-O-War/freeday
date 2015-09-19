var React = require('react');
var Radium = require('radium');

var BottomBox = React.createClass({//Bottom of the page div for additional information/options.
	render: function(){
		return (
      <div style={styles.base}>
      {this.props.children}
      <h2>Bottom Box:</h2>
        //(Contains any additional info/functionality)
      </div>
		)
	}
});

var styles = {
  base: {
    background: 'lightsteelblue',
    padding: '2em',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    fontFamily: 'Verdana'
  },
};

module.exports = Radium(BottomBox);