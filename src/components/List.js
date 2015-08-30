var React = require('react');
var ListItem = require('./ListItem');

var List = React.createClass({//List feed located below map & searchbar. Pulls data from ListItem component.
	render: function(){
		return (
      <div>
        List:
        <ListItem/>
      </div>
		)
	}
});

module.exports = List;