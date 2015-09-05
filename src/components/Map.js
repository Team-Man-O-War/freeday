var React = require('react');
var Pin = require('./Pin');
var GoogleMap = require('google-map-react');
var StyleSheet = require('react-style');
var $ = require('jquery');

var Map = React.createClass({
  
  getInitialState: function() {
    return{
      center: [39.1000, 84.5167],
      zoom: 12,
      map: ''
    };
  },

  componentDidMount: function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        if (this.isMounted()) {
          this.setState({
            center: [pos.lat, pos.lng]
          });
        }
      }.bind(this));
    }
  },
  
  componentWillUnmount: function() {
      navigator.geolocation.clearWatch(this.watchID);
     },

  render: function(){

    return(
      <div>
        <div className="container-fluid">
          <div className="row">
          hello
            <div className="col-xs-12 col-sm-8 col-sm-offset-2">
              <GoogleMap 
                center={this.state.center}
                zoom={this.state.zoom}>
                <div lat={this.state.center[0]} lng={this.state.center[1]} style={styles.youreHere}> ME!</div>
              </GoogleMap>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

var styles = 
  StyleSheet.create({
    youreHere: {
      position: 'absolute',
      height: '20',
      width: '50',
      color: 'white',
      textAlign: 'center',
      backgroundColor: 'black',
      borderRadius: '50%'
    }
});


module.exports = Map;