var React = require('react');

var Pin = React.createClass({//Individual event items that will appear on Map component based on filtering. Pulls from Events component.
  
  render: function(){
    console.log(imHere);
		return (
      <div style={imHere}> here I am! </div>
		)
	}
});

var imHere = {
  color: 'black',
  width: '10',
  height: '10'
};

module.exports = Pin;