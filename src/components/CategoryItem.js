var React = require('react');

var CategoryItem = React.createClass({//individual categories that will fit into CategoryBar component and apply filters to Pins.
	render: function(){//will likely be an array
		return (
      <div>
        <div>
          <button>[Featured]</button>
        </div>
        <div>
          <button>[Music]</button>
        </div>
        <div>
          <button>[Video Gaming]</button>
        </div>
        <div>
          <button>[Board Gaming]</button>
        </div>
        <div>
          <button>[Social]</button>
        </div>
        <div>
          <button>[Educational]</button>
        </div>
        <div>
          <button>[Romantic]</button>
        </div>
        <div>
          <button>[Athletic]</button>
        </div>
        <div>
          <button>[Other]</button>
        </div>
        <div>
          <button>[Etc...]</button>
        </div>
      </div>
		)
	}
});

module.exports = CategoryItem;