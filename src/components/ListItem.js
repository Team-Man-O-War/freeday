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
    // console.log(this.props.singleEvent)
    return (
      <div className="infinite-list-item" style={styles.base}>
          {this.props.children}
           <h4>{this.props.singleEvent.name}</h4>
           <br></br>
           <div dangerouslySetInnerHTML={{__html: this.props.singleEvent.description}} />
           <br></br>
           <h4>{this.props.singleEvent.time}</h4>
           <h4>Distance: {this.props.singleEvent.distance}</h4>
           <h4>Confirmed Attendance: {this.props.singleEvent.confirmed}</h4>
           <a href={this.props.singleEvent.url} style={styles.link}>{this.props.singleEvent.url}</a>
           <div>
           <EventInfo/>
           </div>
      </div>     
      )
    }
});

// <img src={this.props.singleEvent.stockImage} style={styles.image}/>

var styles = {
  base: {
    background: 'peachpuff',
    display: 'inline-block',
    border: '2px solid black',
    borderRadius: 8,
    color: 'black',
    padding: '1% 100px 1% 3%',
    margin: '3px 100px 3px 100px',
    ':hover': {
      opacity: 0.80
    },
  },
  image: {
    borderRadius: 40,
    margin: '0 10px 0 800px',
    padding: '0 10px 0 0',
  },
  link: {
    padding: '0 300px 0 0',
    margin: '0 150px 0 0'
  }
};

module.exports = Radium(ListItem);