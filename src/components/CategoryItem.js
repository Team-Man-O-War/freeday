var React = require('react');
var Radium = require('radium');

var CategoryItem = React.createClass({//individual categories that will fit into CategoryBar component and apply filters to Pins.
	render: function(){//will likely be an array
		return (
      <div>
      <button style={styles.featured}>
      {this.props.children}Featured</button>
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
    color: 'black',
    padding: '3em',
  },

    music: {
    background: 'blue',
    borderRadius: 14,
    color: 'black',
    padding: '3em',
  },

     videoGames: {
    background: 'green',
    borderRadius: 14,
    color: 'black',
    padding: '3em',
  },

     social: {
    background: 'purple',
    borderRadius: 14,
    color: 'black',
    padding: '3em',
  },

       boardGames: {
    background: 'orange',
    borderRadius: 14,
    color: 'black',
    padding: '3em',
  },

      educational: {
    background: 'yellow',
    borderRadius: 14,
    color: 'black',
    padding: '3em',
  },

    romance: {
    background: 'pink',
    borderRadius: 14,
    color: 'black',
    padding: '3em',
  },

     athletic: {
    background: 'cyan',
    borderRadius: 14,
    color: 'black',
    padding: '3em',
  },

   other: {
    background: 'teal',
    borderRadius: 14,
    color: 'black',
    padding: '3em',
  },
};

module.exports = Radium(CategoryItem);