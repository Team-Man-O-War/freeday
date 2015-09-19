var React = require('react');
var TopBox = require('./components/TopBox');
var CategoryBar = require('./components/CategoryBar');
var SearchBar = require('./components/SearchBar');
var BottomBox = require('./components/BottomBox');
var List = require('./components/List');
var Map = require('./components/Map');
// var Tab = require('./components/Tab');
var Radium = require('radium');

var App = React.createClass({
  render: function(){
    return (
      <div style={styles.base}>
      {this.props.children}
        <div>
          <TopBox/>
        </div>

        <br></br>

        <div>
          <CategoryBar/>
        </div>

        <div>
          <Map/>
        </div>
        
        <div>
          <SearchBar/>
          <br></br>
        </div> 

        <h1 style={styles.event}> Event List
        </h1>
        <div>
          <List/>
        </div>

        <div>
          <BottomBox/>
        </div>

      </div>
    );
  }
});

App = Radium(App);

var styles = {
  base: {
    backgroundColor: 'whitesmoke',
    fontFamily: 'Verdana'
  },
  event: {
    padding: '0 0 25px 0',
    margin: '0 0 0 125px'
  }
};

React.render(<App/>, document.getElementById('main'));

