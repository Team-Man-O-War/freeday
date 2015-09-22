var React = require('react');
var Radium = require('radium');

var CategoryItem = React.createClass({//individual categories that will fit into CategoryBar component and apply filters to Pins.
	render: function(){
		return (
      <div className="col-xs-12 col-sm-10 col-sm-offset-1 center-block">
        <div className="col-xs-6 col-sm-1">
          <button style={styles.meetup} >
          {this.props.children}Meetup</button>
        </div>
        <div className="col-xs-6 col-sm-1">
          <button style={styles.eventbrite}>
          {this.props.children}Eventbrite</button>
        </div>
        <div className="col-xs-6 col-sm-1">
          <button style={styles.music}>
          {this.props.children}Music</button>
        </div>
        <div className="col-xs-6 col-sm-1">
          <button style={styles.videoGames}>
          {this.props.children}Video Gaming</button>
        </div>
        <div className="col-xs-6 col-sm-1">
          <button style={styles.boardGames}>
          {this.props.children}Board Gaming</button>
        </div>
        <div className="col-xs-6 col-sm-1">
          <button style={styles.social}>
          {this.props.children}Social</button>
        </div>
        <div className="col-xs-6 col-sm-1">
          <button style={styles.educational}>
          {this.props.children}Educational</button>
        </div>
        <div className="col-xs-6 col-sm-1">
          <button style={styles.romance}>
          {this.props.children}Romantic</button>
        </div>
        <div className="col-xs-6 col-sm-1">
          <button style={styles.athletic}>
          {this.props.children}Athletic</button>
        </div>
        <div className="col-xs-6 col-sm-1">
          <button style={styles.other}>
          {this.props.children}Other</button>
        </div>
      </div>
		)
	}
});

var styles = {
   meetup: {
    background: 'red',
    display: 'inline-block',
    color: 'snow',
    fontFamily: 'Verdana',
    opacity: 0.8,
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
    padding: '50px 25% 50px 25%',
  },

   eventbrite: {
    background: 'orange',
    display: 'inline-block',
    color: 'snow',
    fontFamily: 'Verdana',
    opacity: 0.8,
    padding: '50px 2.5% 50px 2.5%',
  },

   music: {
    background: 'blue',
    display: 'inline-block',
    color: 'snow',
    fontFamily: 'Verdana',
    opacity: 0.8,
    padding: '50px 2.5% 50px 2.5%',
  },

   videoGames: {
    background: 'green',
    display: 'inline-block',
    color: 'snow',
    fontFamily: 'Verdana',
    opacity: 0.8,
    padding: '50px 2.5% 50px 2.5%',
  },

   social: {
    background: 'lightskyblue',
    display: 'inline-block',
    color: 'snow',
    fontFamily: 'Verdana',
    opacity: 0.8,
    padding: '50px 2.5% 50px 2.5%',
  },

   boardGames: {
    background: 'purple',
    display: 'inline-block',
    color: 'snow',
    fontFamily: 'Verdana',
    opacity: 0.8,
    padding: '50px 2.5% 50px 2.5%',
  },

   educational: {
    background: 'gold',
    display: 'inline-block',
    color: 'snow',
    fontFamily: 'Verdana',
    opacity: 0.8,
    padding: '50px 2.5% 50px 2.5%',
  },

   romance: {
    background: 'pink',
    display: 'inline-block',
    color: 'snow',
    fontFamily: 'Verdana',
    opacity: 0.8,
    padding: '50px 2.5% 50px 2.5%',
  },

   athletic: {
    background: 'limegreen',
    display: 'inline-block',
    color: 'snow',
    fontFamily: 'Verdana',
    opacity: 0.8,
    padding: '50px 2.5% 50px 2.5%',
  },

   other: {
    background: 'teal',
    display: 'inline-block',
    color: 'snow',
    fontFamily: 'Verdana',
    borderTopRightRadius: 14,
    borderBottomRightRadius: 14,
    opacity: 0.8,
    padding: '50px 2.5% 50px 2.5%',
  },
};

module.exports = Radium(CategoryItem);