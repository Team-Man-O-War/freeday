var React = require('react');

var ListItems = React.createClass({//Individual events in list form, feeds into List component for display.
	render: function(){
		return (
      <div>
        Example 1,
        Example 2,
      </div>
		)
	}
});

module.exports = ListItems;