var React = require('react');
var $ = require('jquery');
var meetup = require('../meetup.json');
var Radium = require('radium');
var EventInfo = require('./EventInfo');

var ListItem = React.createClass({
  getInitialState: function () {
    return {
      data: []
    };
  },

  render: function() {
    return (
      <div className="infinite-list-item" style={styles.base}>
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

//Radium in-line styling
var styles = {
  base: {
    background: 'peachpuff',
    border: '2px solid black',
    borderRadius: 8,
    color: 'black',
    maxWidth: '83%',
    float: 'left',
    padding: '1% 60% 1% 3%',
    margin: '.3% 5% .3% 8%',
    ':hover': {
      opacity: 0.80
    },
  }
};

module.exports = Radium(ListItem);