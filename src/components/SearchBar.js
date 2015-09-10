var React = require('react');
var Radium = require('radium');

var SearchBar = React.createClass({
	render: function(){
		return (
        <div style={styles.base}>
        {this.props.children}
        <div>
          <div>
        <form>
          <input type="search" placeholder= "search by event type" style={styles.search}>
            {this.props.children}
            </input>
          <button style={styles.button}>
            {this.props.children}Submit</button>
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
    borderRadius: 2,
    color: 'black',
    padding: '1em',
    float: 'right',
    marginLeft: '20em',
    marginRight: '20em',
  },
  search: {
    backgroundColor: 'seashell',
    color: 'black',
    borderRadius: 6,
    padding: '.3em',
  },
  button: {
    backgroundColor: 'orangered',
    color: 'seashell',
    padding: '.3em',
    paddingLeft: '.5em',
    paddingRight: '.5em',
    borderRadius: 8,
    marginLeft: '.2em',

    ':hover': {
      backgroundColor: 'crimson'
    },
  }
};

module.exports = Radium(SearchBar);