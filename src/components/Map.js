var React = require('react');
var Pins = require('./Pins');

var Map = React.createClass({//Embed map. Use google maps & geolocator. Will pull info from Pins component.
	getDefaultProps: function () {
        return {
            initialZoom: 6,
            mapCenterLat: 53.5333,
            mapCenterLng: -113.4073126
        };
    },
	render: function(){
		return (
      <div>
        Map (Pins will render inside)
      </div>
		)
	}
});

module.exports = Map;