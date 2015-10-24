var React = require('react');
var moment = require('moment');

// Time-keeper in TopBox.
var Clock = React.createClass({
  render: function(){
    return (
      <div>
      {this.props.children}
        {moment().format('MMM Do YYYY, h:mm a')}
      </div>
    )
  }
});

module.exports = Clock;