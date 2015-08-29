var React = require('react');

var SearchBar = React.createClass({//Employs search functionality and filters events to be rendered. Between map and list.
	render: function(){
		return (
      <div>
        <form>
          <input type="search" placeholder= "search"/>
          <button>Submit</button>
        </form>
      </div>
		)
	}
});

module.exports = SearchBar;