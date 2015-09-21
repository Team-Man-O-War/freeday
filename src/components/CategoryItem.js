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
    display: 'inline-table',
    color: 'snow',
    padding: '3%',
    fontFamily: 'Verdana',
    opacity: 0.8,
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
  },

   eventbrite: {
    background: 'orange',
    display: 'inline-table',
    color: 'snow',
    padding: '3% 2.8% 3% 2.8%',
    fontFamily: 'Verdana',
    opacity: 0.8,
  },

   music: {
    background: 'blue',
    display: 'inline-table',
    color: 'snow',
    padding: '3% 2.8% 3% 2.8%',
    fontFamily: 'Verdana',
    opacity: 0.8,
  },

   videoGames: {
    background: 'green',
    display: 'inline-table',
    color: 'snow',
    padding: '3% 2.8% 3% 2.8%',
    fontFamily: 'Verdana',
    opacity: 0.8,
  },

   social: {
    background: 'lightskyblue',
    display: 'inline-table',
    color: 'snow',
    padding: '3% 2.8% 3% 2.8%',
    fontFamily: 'Verdana',
    opacity: 0.8,
  },

   boardGames: {
    background: 'purple',
    display: 'inline-table',
    color: 'snow',
    padding: '3% 2.8% 3% 2.8%',
    fontFamily: 'Verdana',
    opacity: 0.8,
  },

   educational: {
    background: 'gold',
    display: 'inline-table',
    color: 'snow',
    padding: '3% 2.8% 3% 2.8%',
    fontFamily: 'Verdana',
    opacity: 0.8,
  },

   romance: {
    background: 'pink',
    display: 'inline-table',
    color: 'snow',
    padding: '3% 2.8% 3% 2.8%',
    fontFamily: 'Verdana',
    opacity: 0.8,
  },

   athletic: {
    background: 'limegreen',
    display: 'inline-table',
    color: 'snow',
    padding: '3% 2.8% 3% 2.8%',
    fontFamily: 'Verdana',
    opacity: 0.8,
  },

   other: {
    background: 'teal',
    display: 'inline-table',
    color: 'snow',
    padding: '3% 3% 3% 2.8%',
    fontFamily: 'Verdana',
    borderTopRightRadius: 14,
    borderBottomRightRadius: 14,
    opacity: 0.8,
  },
};

module.exports = Radium(CategoryItem);