var React = require('react');
var CategoryItem = require('./CategoryItem');
var Radium = require('radium');

var CategoryBar = React.createClass({//will contain individual category items from CategoryItem.
  render: function(){//may need .map or loop later
		return (
      <div style={styles.base}>
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
    margin: '0 115px 0 100px',
  },
};

module.exports = Radium(CategoryBar);