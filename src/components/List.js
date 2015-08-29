var React = require('react');
var ListItems = require('./ListItems');

var List = React.createClass({//List feed located below map & searchbar. Pulls data from ListItems component.
	render: function(){
		return (
      <div>
        List:
        <ListItems/>
      </div>
		)
	}
});

module.exports = List;