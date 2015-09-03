var React = require('react');
var TopBox = require('./components/TopBox');
var CategoryBar = require('./components/CategoryBar');
var SearchBar = require('./components/SearchBar');
var ListItem = require('./components/ListItem');
var BottomBox = require('./components/BottomBox');
var List = require('./components/List');

var App = React.createClass({

  render: function(){
    return (
      <div>

        <h3>Top Box:</h3>
        <div>
          <TopBox/>
        </div>

        <br></br>
 

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

