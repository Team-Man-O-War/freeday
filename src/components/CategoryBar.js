var React = require('react');
var CategoryItem = require('./CategoryItem');
var Radium = require('radium');

var CategoryBar = React.createClass({//will contain individual category items from CategoryItem.
  render: function(){//may need .map or loop later
		return (
      <div style={styles.base}>

      //(Contains CategoryItems icons/buttons that should toggle off & on and filter results)
      <CategoryItem/>
      </div>
		)
	}
});

var styles = {
  base: {
    background: 'lightsteelblue',
    border: 0,
    borderRadius: 14,
    padding: '1.5em',
  },
};

module.exports = Radium(CategoryBar);