var React = require('react');
var $ = require('jquery');
var meetup = require('../meetup.json');

var ListItem = React.createClass({

  getInitialState: function () {
    return {
      data: []
    };
  },

  componentDidMount: function () {

  },

  render: function() {
    return (
      <div className="infinite-list-item">
        Event {this.props.num}
      </div>

      )
    }
});

module.exports = ListItem;