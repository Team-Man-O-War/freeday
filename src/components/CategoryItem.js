var React = require('react');
var Radium = require('radium');

var CategoryItem = React.createClass({//individual categories that will fit into CategoryBar component and apply filters to Pins.
	render: function(){//will likely be an array
		return (
      <div>
      <button style={styles.featured}>
      {this.props.children}Featured</button>
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
  featured: {
    background: 'red',
    borderRadius: 14,
    color: 'snow',
    padding: '2em',
    fontFamily: 'Verdana',
    margin: '.5em'
  },

   meetup: {
    background: 'limegreen',
    borderRadius: 14,
    color: 'snow',
    padding: '2em',
    fontFamily: 'Verdana',
    margin: '.5em'
  },

   eventbrite: {
    background: 'darkred',
    borderRadius: 14,
    color: 'snow',
    padding: '2em',
    fontFamily: 'Verdana',
    margin: '.5em'
  },

    music: {
    background: 'blue',
    borderRadius: 14,
    color: 'snow',
    padding: '2em',
    fontFamily: 'Verdana',
    margin: '.5em'
  },

     videoGames: {
    background: 'green',
    borderRadius: 14,
    color: 'snow',
    padding: '2em',
    fontFamily: 'Verdana',
    margin: '.5em'
  },

     social: {
    background: 'purple',
    borderRadius: 14,
    color: 'snow',
    padding: '2em',
    fontFamily: 'Verdana',
    margin: '.5em'
  },

       boardGames: {
    background: 'orange',
    borderRadius: 14,
    color: 'snow',
    padding: '2em',
    fontFamily: 'Verdana',
    margin: '.5em'
  },

      educational: {
    background: 'gold',
    borderRadius: 14,
    color: 'snow',
    padding: '2em',
    fontFamily: 'Verdana',
    margin: '.5em'
  },

    romance: {
    background: 'pink',
    borderRadius: 14,
    color: 'snow',
    padding: '2em',
    fontFamily: 'Verdana',
    margin: '.5em'
  },

     athletic: {
    background: 'lightskyblue',
    borderRadius: 14,
    color: 'snow',
    padding: '2em',
    fontFamily: 'Verdana',
    margin: '.5em'
  },

   other: {
    background: 'teal',
    borderRadius: 14,
    color: 'snow',
    padding: '2em',
    fontFamily: 'Verdana',
    margin: '.5em'
  },
};

module.exports = Radium(CategoryItem);