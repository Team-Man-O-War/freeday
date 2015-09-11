var React = require('react');
var moment = require('moment');
var Radium = require('radium');

var Clock = React.createClass({
  render: function(){
    return (
      <div style={styles.base}>
      {this.props.children}
        {moment().format('MMM Do YYYY, h:mm a')}
      </div>
    )
  }
});

var styles = {
  base: {
    fontFamily: 'Verdana',
    fontSize: '1.3em',
    color: 'slategray',
    marginLeft: '84%',
  },
};

module.exports = Radium(Clock);