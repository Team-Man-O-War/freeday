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
           <br></br>
           <div dangerouslySetInnerHTML={{__html: this.props.singleEvent.description}} />
           
           <h4>{this.props.singleEvent.time}</h4>
           <h4>Distance: {this.props.singleEvent.distance}</h4>
           <h4>Confirmed Attending: {this.props.singleEvent.confirmed}</h4>
        </a>
      </div>     
      )
    }
});

// <img src={this.props.singleEvent.stockImage} style={styles.image}/>

var styles = {
  base: {
    background: 'peachpuff',
    display: 'inline-block',
    border: '3px solid black',
    borderRadius: 8,
    color: 'black',
    padding: '1% 100px 1% 3%',
    margin: '5px 300px 5px 30px',
    ':hover': {
      backgroundColor: 'orangered'
    },
  },
  image: {
    borderRadius: 40,
    margin: '0 10px 0 800px',
    padding: '0 10px 0 0',
  },
};

module.exports = Radium(ListItem);