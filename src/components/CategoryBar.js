var React = require('react');
var CategoryItem = require('./CategoryItem');
var Radium = require('radium');

var CategoryBar = React.createClass({//will contain individual category items from CategoryItem.
  render: function(){
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
    borderRadius: 8,
    fontFamily: 'Verdana',
    margin:'-1.25% 2% .25% 2%',
  },
};

module.exports = Radium(CategoryBar);