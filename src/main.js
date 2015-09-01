var React = require('react');
var Map = require('./components/Map');
var TopBox = require('./components/TopBox.js');
var CategoryBar = require('./components/CategoryBar.js');
var Map = require('./components/Map.js');
var SearchBar = require('./components/SearchBar.js');
var List = require('./components/List.js');
var BottomBox = require('./components/BottomBox.js');
var Event = require('./components/Event.js');


var App = React.createClass({
  // getInitialState: function(){
  //   return (
  //     anything: {};
  //   );
  // },

  // componentDidMount: function(){
  //   this.setState({anything:'hello'});
  // },

  render: function(){
    return (
      <div>

        <div>
          <TopBox/>
        </div>

        <div>
          <CategoryBar/>
        </div>
        
        <div>
          <Map/>
        </div>

        <div>
          <SearchBar/>
        </div>

        <div>
          <List/>
        </div>

        <div>
          <BottomBox/>
        </div>

        <div>
          <Event/>
        </div>

      </div>
    );
  }
});

React.render(<App/>, document.getElementById('main'));

