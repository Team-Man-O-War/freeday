var React = require('react');

var Pin = React.createClass({//Individual event items that will appear on Map component based on filtering. Pulls from Events component.
  getInitialState: function() {
    return{
      center: [48.8582, 2.2945],
      zoom: 9,
      map: ''
      pin: []
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

  render: function(){
		return (
      <div lat=48.8582 lng=2.2945>
       I AM A PIN
       </div>
		)
	}
});

module.exports = Pin;