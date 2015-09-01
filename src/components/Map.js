var React = require('react');
var Pins = require('./Pins');
var GoogleMap = require('google-map-react');
var Map = React.createClass({
  getInitialState: function(){
    return{
      center: [33.979471, -118.422549],
      zoom: 12
    };
  },
  render: function(){
    return(
      <div>
        <GoogleMap 
          center={this.state.center} 
          zoom={this.state.zoom} >
        </GoogleMap>
      </div>
      );
  },

});
module.exports = Map;