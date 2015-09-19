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
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    color: 'black',
    padding: '.5em 1em .5em 1em',
    float: 'right',
    margin: '0 17.5% 0 15%',
    fontFamily: 'Verdana',
  },
  search: {
    backgroundColor: 'seashell',
    color: 'black',
    borderRadius: 6,
    padding: '.3em 15em .3em 1em',
    fontFamily: 'Verdana'
  },
  button: {
    backgroundColor: 'orangered',
    color: 'seashell',
    padding: '1% 2% 1% 2%',
    borderRadius: 8,
    margin: '0 0 0 .4em',
    fontFamily: 'Verdana',

    ':hover': {
      backgroundColor: 'crimson'
    },
  }
};

module.exports = Radium(SearchBar);