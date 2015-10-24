var React = require('react');
var $ = require('jquery');
var meetup = require('../meetup.json');
var EventInfo = require('./EventInfo');

var ListItem = React.createClass({
  getInitialState: function () {
    return {
      data: []
    };
  },

  render: function() {
    return (
      <div className="infinite-list-item">
        {this.props.children}
         <h2>{this.props.singleEvent.name}</h2>
          <br></br>
         <h3>{this.props.singleEvent.time}</h3>
         <h4>Distance: {this.props.singleEvent.distance}</h4>
         <h4>Confirmed Attendance: {this.props.singleEvent.confirmed}</h4>
          <br></br>
         <EventInfo singleEvent={this.props.singleEvent}/>
      </div>     
      )
    }
});

// <img src={this.props.singleEvent.stockImage} style={styles.image}/>

module.exports = ListItem;