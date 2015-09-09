var React = require('react');
var $ = require('jquery');
var meetup = require('../meetup.json');
var Radium = require('radium');

var ListItem = React.createClass({

  getInitialState: function () {
    return {
      data: []
    };
  },

  render: function() {
    return (
      <div className="infinite-list-item">
        <a href={this.props.num} style={styles.base}>
          {this.props.children}Event {this.props.num}
        </a>
      </div>
      )
    }
});

var styles = {
  base: {
    background: 'orangered',
    border: '1px solid black',
    borderRadius: 8,
    color: 'black',
    padding: '.08em',
    margin: '4em',

    ':hover': {
      backgroundColor: 'firebrick'
    },

    ':focus': {
      backgroundColor: 'firebrick'
    },

    ':active': {
      backgroundColor: 'firebrick'
    },
  },
};

module.exports = Radium(ListItem);