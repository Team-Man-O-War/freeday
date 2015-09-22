var React = require('react');
var CategoryItem = require('./CategoryItem');
var Radium = require('radium');

var CategoryBar = React.createClass({//will contain individual category items from CategoryItem.
  render: function(){//may need .map or loop later
		return (
      <div style={styles.base}>
        <div className="container-fluid">
          <div className="row center-block">
            <div className="col-sm-10 col-sm-offset-1 center-block">
              <CategoryItem/>
            </div>
          </div>
        </div>
      </div>
		)
	}
});

var styles = {
  base: {
    background: 'lightsteelblue',
    display: 'block',
    borderRadius: 14,
    fontFamily: 'Verdana'
  },
};

module.exports = Radium(CategoryBar);