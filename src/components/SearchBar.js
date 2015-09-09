var React = require('react');
var Radium = require('radium');

var SearchBar = React.createClass({//Employs search functionality and filters events to be rendered. Between map and list.
	render: function(){
		return (
        <div style={styles.base}>
        {this.props.children}
        <div>
          <div>
        <form>
          <input type="search" placeholder= "search by event type" style={styles}/>
          <button>Submit</button>
        </form>
      </div>
      </div>
      </div>
		)
	}
});

var styles = {
  base: {
    background: 'steelblue',
    border: 0,
    borderRadius: 8,
    color: 'black',
    padding: '1em',
    float: 'right',
    marginLeft: '20em',
    marginRight: '20em',
    overflow: 'auto',
  },
};

module.exports = Radium(SearchBar);