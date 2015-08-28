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
  //     header: {};
  //   )
  // },

  componentDidMount: function(){
    this.setState({header:'hello'});
  },

  render: function(){
    return (
      <div>
        {this.state.header}
      </div>
    );
  }
});

React.render(<App/>, document.body);
