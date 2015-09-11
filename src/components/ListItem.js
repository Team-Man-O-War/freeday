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
    // console.log(this.props.meetupEvent, 'hellodjfsldjfj');
    // console.log(meetupEventItem);
    return (
      <div className="infinite-list-item">
        <a href={this.props.num} style={styles.base}>
          {this.props.children}Event {this.props.num}
        </a>
      </div>
      <div>{meetupEventItem}</div>
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
    paddingRight: '5em',
    paddingLeft: '1em',
    margin: '4em',
    overflow: 'auto',

    ':hover': {
      backgroundColor: 'firebrick'
    },
  },
};

module.exports = Radium(ListItem);