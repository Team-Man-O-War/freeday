var React = require('react');
var Map = require('./components/Map');
var TopBox = require('./components/TopBox');
var CategoryBar = require('./components/CategoryBar');
var Map = require('./components/Map');
var SearchBar = require('./components/SearchBar');
var List = require('./components/List');
var BottomBox = require('./components/BottomBox');
var Event = require('./components/Event');


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
          <Event/>
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

React.render(<App/>, document.getElementById('main'));

