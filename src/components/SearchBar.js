var React = require('react');

var SearchBar = React.createClass({//Employs search functionality and filters events to be rendered. Between map and list.
	render: function(){
    var styles = {
      width: '538'
    };
		return (
        <div className="container-fluid" >
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2">
        <form>
          <input type="search" placeholder= "search" style={styles}/>
          <button>Submit</button>
        </form>
      </div>
      </div>
      </div>
		)
	}
});

module.exports = SearchBar;