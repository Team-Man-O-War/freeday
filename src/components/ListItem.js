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
    
    // for (var i = 0; i < singleEvent.length; i+=1) {
    //   singleEvent[i]
    // }
 // 
    return (
      <div className="infinite-list-item">
        <a href={this.props.num} >
       
          {this.props.children}Event <div dangerouslySetInnerHTML={{__html: this.props.singleEvent}} />
        </a>
        
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