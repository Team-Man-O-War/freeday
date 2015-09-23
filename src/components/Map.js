var React = require('react');
var Pin = require('./Pin');
var Marker = require('./Marker');
var GoogleMap = require('google-map-react');
var Radium = require('radium');
var $ = require('jquery');
var AppDispatcher = require('../flux/Dispatcher');
var api = require('../flux/api');

var userMarker = "http://icons.iconarchive.com/icons/icons-land/vista-map-markers/256/Map-Marker-Marker-Outside-Azure-icon.png";
var meetupMarker = "https://upload.wikimedia.org/wikipedia/commons/7/73/Meetup_Logo_2015.png";
var eventBriteMarker;
var freedayMarker;

var Map = React.createClass({
  userClick: function(){
      alert("You are here:\n" + this.state.center);
  },

  eventClick: function(){
    alert('hello');
  },

  getInitialState: function() {

    return{
      center: [39.1000, 84.5167],
      zoom: 11,
      map: '',
      eventLocation: [],
      coords: []
    };
  },

  componentDidMount: function() {
    this.grabEventLocations();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var self = this;
        var pos = {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        };

        $(document).ready(function() {
          $.post('/mylocation', pos, function (data) {
            
          });
        });
        AppDispatcher.getMeetupData(function(data) {
          self.setState({
            eventLocation: data.results
          });
        });

        if (this.isMounted()) {
          this.setState({
            center: [pos.lat, pos.lon]
          });
        }
      }.bind(this));
    }
  },
  
  componentWillUnmount: function() {
      navigator.geolocation.clearWatch(this.watchID);
     },

  grabEventLocations: function () {
    var locations = this.state.eventLocation;
    console.log(this.state.eventLocation);
    var coords;
    for (var i = 0; i < locations.length; i+=1) {
      coords = {};
      coords.lat = locations[i].group.group_lat;
      coords.lng = locations[i].group.group_lon;
      this.state.coords.push(coords);
    }
  },

  render: function() {
    if (this.state.eventLocation.length > 0) {
      this.grabEventLocations();
    }

    var array = [];
    for (var i = 0; i < this.state.coords.length; i+=1) {
      lat = this.state.coords[i].lat;
      lng = this.state.coords[i].lng;
      array.push(<div lat={lat} lng={lng} onClick={this.eventClick}><img src={meetupMarker} alt="EVENT" height="30" width="30" style={styles.meetup}/></div>)
    }

    return (
      <div style={styles.base}>
      {this.props.children}
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-sm-offset-2">
              <GoogleMap 

                style={styles.map}
                center={this.state.center}
                zoom={this.state.zoom}>
                <div lat={this.state.center[0]} lng={this.state.center[1]}>
                  <img src={userMarker} height="30" width="30" onClick={this.userClick}/>
                </div>
                {array}
              </GoogleMap>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

var styles = {
  map: {
    height: 10,
    width: 20
  },

  base: {
    background: 'steelblue',
    border: 0,
    borderRadius: 8,
    color: 'black',
    padding: '.5%',
    fontFamily: 'Verdana',
  },
  meetup:{
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000
  }

};

module.exports = Map;
