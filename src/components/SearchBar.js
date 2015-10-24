var React = require('react');

var SearchBar = React.createClass({
	render: function(){
		return (
      <div>
        {this.props.children}
        <div>
          <div>
          <form>
            <input type="search" placeholder= "search by event type">
              {this.props.children}
              </input>
            <button>
              {this.props.children}Submit</button>
          </form>
          </div>
        </div>
      </div>
		)
	}
});

module.exports = SearchBar;