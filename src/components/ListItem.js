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
    var singleEvent = this.props.singleEvent;


    return (
      <div className="infinite-list-item">
        <a href={this.props.num} >
       
          {this.props.children}Event 
        </a>
        <div style={styles.base} dangerouslySetInnerHTML={{__html: singleEvent}} />
      </div>
      
      )
    }
});

var styles = {
  base: {
    background: 'orangered',
    border: '3px solid black',
    borderRadius: 8,
    color: 'black',
    padding: '1% 75% 1% 10px',
    margin: '1px 20% 1px 20px',
    

    ':hover': {
      backgroundColor: 'firebrick'
    },
  },
};

module.exports = Radium(ListItem);