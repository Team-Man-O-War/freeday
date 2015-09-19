var React = require('react');
var Radium = require('radium');

var CategoryItem = React.createClass({//individual categories that will fit into CategoryBar component and apply filters to Pins.
	render: function(){
		return (
      <div>
      <button style={styles.meetup}>
      {this.props.children}Meetup</button>
      <button style={styles.eventbrite}>
      {this.props.children}Eventbrite</button>
      <button style={styles.music}>
      {this.props.children}Music</button>
      <button style={styles.videoGames}>
      {this.props.children}Video Gaming</button>
      <button style={styles.boardGames}>
      {this.props.children}Board Gaming</button>
      <button style={styles.social}>
      {this.props.children}Social</button>
      <button style={styles.educational}>
      {this.props.children}Educational</button>
      <button style={styles.romance}>
      {this.props.children}Romantic</button>
      <button style={styles.athletic}>
      {this.props.children}Athletic</button>
      <button style={styles.other}>
      {this.props.children}Other</button>
      </div>
		)
	}
});

var styles = {
   meetup: {
    background: 'red',
    color: 'snow',
    padding: '3em',
    fontFamily: 'Verdana',
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14
  },

   eventbrite: {
    background: 'orange',
    color: 'snow',
    padding: '3em',
    fontFamily: 'Verdana',
  },

   music: {
    background: 'blue',
    color: 'snow',
    padding: '3em',
    fontFamily: 'Verdana',
  },

   videoGames: {
    background: 'green',
    color: 'snow',
    padding: '3em',
    fontFamily: 'Verdana',
  },

   social: {
    background: 'lightskyblue',
    color: 'snow',
    padding: '3em',
    fontFamily: 'Verdana',
  },

   boardGames: {
    background: 'purple',
    color: 'snow',
    padding: '3em',
    fontFamily: 'Verdana',
  },

   educational: {
    background: 'gold',
    color: 'snow',
    padding: '3em',
    fontFamily: 'Verdana',
  },

   romance: {
    background: 'pink',
    color: 'snow',
    padding: '3em',
    fontFamily: 'Verdana',
  },

   athletic: {
    background: 'limegreen',
    color: 'snow',
    padding: '3em',
    fontFamily: 'Verdana',
  },

   other: {
    background: 'teal',
    color: 'snow',
    padding: '3em',
    fontFamily: 'Verdana',
    borderTopRightRadius: 14,
    borderBottomRightRadius: 14,
  },
};

module.exports = Radium(CategoryItem);