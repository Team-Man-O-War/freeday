var React = require('react');
var $ = require('jquery');
var meetup = require('../meetup.json');

var ListItem = React.createClass({

  getInitialState: function () {
    return {
      data: []
    };
  },

  render: function() {
    return (
      <div className="infinite-list-item">
        <a href={this.props.num}>
          Event {this.props.num}
        </a>
      </div>
      )
    }
});

module.exports = ListItem;