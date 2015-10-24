var React = require('react');
var CategoryItem = require('./CategoryItem');

//will contain individual category items from CategoryItem.
var CategoryBar = React.createClass({
  render: function(){
		return (
      <div>
        <CategoryItem/>
      </div>
		)
	}
});

module.exports = CategoryBar;