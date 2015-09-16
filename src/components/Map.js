var React = require('react');
var Pin = require('./Pin');
var GoogleMap = require('google-map-react');
// var Radium = require('radium');
var $ = require('jquery');

var Map = React.createClass({
  getInitialState: function() {
    return{
      center: [39.1000, 84.5167],
      zoom: 9,
      map: '',
      eventLocation: null
    };
  },

  componentDidMount: function() {
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

        $.get('/meetup', function (data) {
          console.log(data);
          self.setState({
            eventLocation: data.results
          });
        });
        // console.log(eventLocation);
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
    var location = this.state.eventLocation;
    console.log(location);
  },

  render: function(){

    return(
      <div style={styles.base}>
      {this.props.children}
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-sm-offset-2">
              <GoogleMap 
                style={styles.map}
                center={this.state.center}
                zoom={this.state.zoom}>
                <div lat={this.state.center[0]} lng={this.state.center[1]}> YOU ARE HERE</div>
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
    borderRadius: 50,
    color: 'black',
    padding: '1em',
    fontFamily: 'Verdana',
  },
};

module.exports = Map;
