var React = require('react');
var Radium = require('radium');

var RadiumButton = React.createClass({
  render: function(){
    return (
      <button style={[
        styles.base,
        this.props.block && styles.block
        ]}>
      {this.props.children}Hello
      </button>
    );
  }
});

var styles = {
  base: {
    background: 'powderblue',
    border: 0,
    borderRadius: 14,
    color: 'aliceblue',
    padding: '1.5em',

    ':hover': {
      backgroundColor: 'lightsteelblue'
    },

    ':focus': {
      backgroundColor: 'steelblue'
    },

    ':active': {
      backgroundColor: 'skyblue'
    },
  },

  block: {
    display: 'block',

    ':hover': {
      boxShadow: '0 3px 0 rgba(0,0,0,0.2)'
    }
  },
};


module.exports = Radium(RadiumButton);