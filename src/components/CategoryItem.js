var React = require('react');

var CategoryItem = React.createClass({//individual categories that will fit into CategoryBar component and apply filters to Pins.
	render: function(){//will likely be an array
		return (
      <div>
      [Featured] [Music] [Video Gaming] [Board Gaming] [Social] [Educational] [Romantic] [Athletic] [Other ][Etc...]
      </div>
		)
	}
});

module.exports = CategoryItem;