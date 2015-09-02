var React = require('react');
var Pins = require('./Pins');
var GoogleMap = require('google-map-react');
var StyleSheet = require('react-style');
var $ = require('jquery');

var Map = React.createClass({
  
  getInitialState: function(){
    return{
      center: [45.4000, 75.6667],
      zoom: 12,
      map: ''
    };
  },
  
  // geoLoco: function() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //       var pos = {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude
  //       };
  //     });
  //   }
  // },

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
  // componentDidMount: function() {
  //     navigator.geolocation.getCurrentPosition(
  //       (center) => this.setState({center}),
  //       (error) => alert(error.message),
  //       {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
  //     );
  //     this.watchID = navigator.geolocation.watchPosition((center) => {
  //       this.setState({center});
  //     });
  //   },
  
  componentWillUnmount: function() {
      navigator.geolocation.clearWatch(this.watchID);
     },


  render: function(){
    var styles = {
      height: '150'
    };
    return(
      <div className="container-fluid" >
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2">
            <GoogleMap
              style={styles}
              center={this.state.center} 
              zoom={this.state.zoom} >
            </GoogleMap>
          </div>
        </div>
      </div>
    );
  },
});

// var styles = 
// StyleSheet.create({
//   gooMap: {
//     height: '100px'
//   }
// });
module.exports = Map;