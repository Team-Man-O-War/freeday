var React = require('react');
var Radium = require('radium');

//individual categories that will fit into CategoryBar component and apply filter.
var CategoryItem = React.createClass({
	render: function(){
		return (
      <div className="row">
        <div className="categoryItem col-xs-5 col-sm-1 col-sm-offset-1">
          <button style={styles.meetup} >
          {this.props.children}Meetup</button>
        </div>
        <div className="categoryItem col-xs-5 col-sm-1">
          <button style={styles.eventbrite}>
          {this.props.children}Eventbrite</button>
        </div>
        <div className="categoryItem col-xs-5 col-sm-1">
          <button style={styles.music}>
          {this.props.children}Music</button>
        </div>
        <div className="categoryItem col-xs-5 col-sm-1">
          <button style={styles.videoGames}>
          {this.props.children}Video Gaming</button>
        </div>
        <div className="categoryItem col-xs-5 col-sm-1">
          <button style={styles.boardGames}>
          {this.props.children}Board Gaming</button>
        </div>
        <div className="categoryItem col-xs-5 col-sm-1">
          <button style={styles.social}>
          {this.props.children}Social</button>
        </div>
        <div className="categoryItem col-xs-5 col-sm-1">
          <button style={styles.educational}>
          {this.props.children}Educational</button>
        </div>
        <div className="categoryItem col-xs-5 col-sm-1">
          <button style={styles.romance}>
          {this.props.children}Romantic</button>
        </div>
        <div className="categoryItem col-xs-5 col-sm-1">
          <button style={styles.athletic}>
          {this.props.children}Athletic</button>
        </div>
        <div className="categoryItem col-xs-5 col-sm-1">
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
    color: 'snow',
    fontFamily: 'Verdana',
    opacity: 0.8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    width: '100%',
    height: 120
  },

   eventbrite: {
    background: 'orange',
    color: 'snow',
    fontFamily: 'Verdana',
    opacity: 0.8,
    width: '100%',
    height: 120
  },

   music: {
    background: 'blue',
    color: 'snow',
    fontFamily: 'Verdana',
    opacity: 0.8,
    width: '100%',
    height: 120
  },

   videoGames: {
    background: 'green',
    color: 'snow',
    fontFamily: 'Verdana',
    opacity: 0.8,
    width: '100%',
    height: 120
  },

   social: {
    background: 'lightskyblue',
    color: 'snow',
    fontFamily: 'Verdana',
    opacity: 0.8,
    width: '100%',
    height: 120
  },

   boardGames: {
    background: 'purple',
    color: 'snow',
    fontFamily: 'Verdana',
    opacity: 0.8,
    width: '100%',
    height: 120
  },

   educational: {
    background: 'gold',
    color: 'snow',
    fontFamily: 'Verdana',
    opacity: 0.8,
    width: '100%',
    height: 120
  },

   romance: {
    background: 'pink',
    color: 'snow',
    fontFamily: 'Verdana',
    opacity: 0.8,
    width: '100%',
    height: 120
  },

   athletic: {
    background: 'limegreen',
    color: 'snow',
    fontFamily: 'Verdana',
    opacity: 0.8,
    width: '100%',
    height: 120
  },

   other: {
    background: 'teal',
    color: 'snow',
    fontFamily: 'Verdana',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    opacity: 0.8,
    width: '100%',
    height: 120
  },
};

module.exports = Radium(CategoryItem);