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

        <h3>Top Box:</h3>
        <div>
          <TopBox/>
        </div>

        <br></br>
        <div>
          <Event/>
        </div>

        <h3>CategoryBar:</h3>
        <div>
          <CategoryBar/>
        </div>
        
        <div>
          <Map/>
        </div>

        <div>
          <SearchBar/>
          //(Search/filtering functionality)
        </div> 

        <h3>List: //(Contains Event components)
        </h3>
        <div>
          <List/>
        </div>

        <h3>Bottom Box:</h3>
        <div>
          <BottomBox/>
        </div>

      </div>
    );
  }
});

React.render(<App/>, document.getElementById('main'));

