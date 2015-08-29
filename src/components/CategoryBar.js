var React = require('react');
var CategoryItem = require('./CategoryItem');

var CategoryBar = React.createClass({//will contain individual category items from CategoryItem.
	// getInitialState: function(){
 //    return (
 //      categories: ['music','videogaming','boardgaming','social','educational','romantic','other']
 //    )
 //  },

  render: function(){//may need .map or loop later
		return (
      <div>
      CategoryBar:
      <CategoryItem/>
      </div>
		)
	}
});

module.exports = CategoryBar;