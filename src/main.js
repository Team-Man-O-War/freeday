var React = require('react');
var TopBox = require('./components/TopBox');
var CategoryBar = require('./components/CategoryBar');
var SearchBar = require('./components/SearchBar');
var BottomBox = require('./components/BottomBox');
var List = require('./components/List');
var Map = require('./components/Map');
// var Tab = require('./components/Tab');

var App = React.createClass({
  render: function(){
    return (
      <div>
      {this.props.children}
        <div>
          <TopBox/>
        </div>

        <br></br>

        <div>
          <Map/>
        </div>
        
        <h1>
          Event List
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
        // <div>
        //   <CategoryBar/>
        // </div>

        // <div>
        //   <SearchBar/>
        //   <br></br>
        // </div> 

React.render(<App/>, document.getElementById('main'));

