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
          <Map/>
        </div>
        


        <h1 style={styles.eventList}>Event List
        </h1>
        <div>
          <List/>
        </div>

        <div>
          <BottomBox/>
        </div>

      </div>
    );  }

});

        // <div>
        //   <CategoryBar/>
        // </div>

        // <div>
        //   <SearchBar/>
        //   <br></br>
        // </div> 
App = Radium(App);
var styles = {
  base: {
    fontFamily: 'Verdana'
  },
  eventList: {
    padding: '1% 0',
    margin: '0 0 0 45%'
  }
};

React.render(<App/>, document.getElementById('main'));

