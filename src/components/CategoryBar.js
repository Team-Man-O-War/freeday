var React = require('react');
var CategoryItems = require('./CategoryItems');

var CategoryBar = React.createClass({//will contain individual category items from CategoryItems.
	// getInitialState: function(){
 //    return (
 //      categories: ['music','videogaming','boardgaming','social','educational','romantic','other']
 //    )
 //  },

  render: function(){//may need .map or loop later
		return (
      <div>
      CategoryBar:
      <CategoryItems/>
      </div>
		)
	}
});

module.exports = CategoryBar;