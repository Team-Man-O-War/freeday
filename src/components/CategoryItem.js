var React = require('react');

var CategoryItem = React.createClass({//individual categories that will fit into CategoryBar component and apply filters to Pins.
	render: function(){//will likely be an array
		return (
      <div>
      <button>Featured</button>
      <button>Music</button>
      <button>Video Gaming</button>
      <button>Board Gaming</button>
      <button>Social</button>
      <button>Educational</button>
      <button>Romantic</button>
      <button>Athletic</button>
      <button>Other</button>
      <button>Etc...</button>
      //(Set true/false to toggle filters)
      </div>
		)
	}
});

module.exports = CategoryItem;