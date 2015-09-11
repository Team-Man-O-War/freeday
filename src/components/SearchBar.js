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
    borderRadius: 4,
    color: 'black',
    padding: '1em',
    float: 'right',
    margin: '0 20em 0 20em',
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
    padding: '.3em .5em .3em .5em',
    borderRadius: 8,
    margin: '0 0 0 .2em',

    ':hover': {
      backgroundColor: 'crimson'
    },
  }
};

module.exports = Radium(SearchBar);