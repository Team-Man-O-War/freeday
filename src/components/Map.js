var React = require('react');
var Pins = require('./Pins');
var GoogleMap = require('google-map-react');
var StyleSheet = require('react-style');
var Map = React.createClass({
  getInitialState: function(){
    return{
      center: [33.979471, -118.422549],
      zoom: 12
    };
  },
  render: function(){
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

var styles = 
StyleSheet.create({
  gooMap: {
    height: '100px'
  }
});
module.exports = Map;