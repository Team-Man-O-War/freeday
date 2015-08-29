var React = require('react');
var TopBox = require('./components/TopBox.js');
var CategoryBar = require('./components/CategoryBar.js');
var Map = require('./components/Map.js');
var SearchBar = require('./components/SearchBar.js');
var List = require('./components/List.js');
var BottomBox = require('./components/BottomBox.js');


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
      </div>
    );
  }
});

React.render(<App/>, document.body);
