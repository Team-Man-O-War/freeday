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
    margin: '-1.3% 0 .2em 0',
    fontFamily: 'Verdana'
  },
};

module.exports = Radium(CategoryBar);