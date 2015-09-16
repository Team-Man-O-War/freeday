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
    console.log(this.props.singleEvent)
    return (
      <div className="infinite-list-item" style={styles.base}>
        <a href={this.props.singleEvent.url}>
        {console.log(this.props.singleEvent.description)}
          {this.props.children}
           <h4>{this.props.singleEvent.name}</h4>
           <img src={this.props.singleEvent.stockImage} style={styles.image}/>
           <h4>Distance: {this.props.singleEvent.distance}</h4>
        </a>
      </div>     
      )
    }
});

var styles = {
  base: {
    background: 'orangered',
    decoration: 'none',
    overflow: 'auto',
    border: '3px solid black',
    borderRadius: 8,
    color: 'black',
    padding: '1% 70% 1% 3%',
    margin: '5px 200px 5px 30px',
    ':hover': {
      backgroundColor: 'firebrick'
    },
  },
  image: {
    float: 'left',
    borderRadius: 30,
    margin: '0 10px 0 800px',
    padding: '0 10px 0 0',
    overflow: 'auto',
  },
  text: {
    overflow: 'ellipsis',
    textOverflow: 'ellipsis',
    float: 'left',
    maxlength: 20,
    maxlLength: 20,
  }
};

module.exports = Radium(ListItem);