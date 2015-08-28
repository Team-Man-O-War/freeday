var React = require('react');
var TopBox = require('./components/TopBox.js');
var CategoryBar = require('./components/CategoryBar.js');
var Map = require('./components/Map.js');
var SearchBar = require('./components/SearchBar.js');
var List = require('./components/List.js');
var BottomBox = require('./components/BottomBox.js');


var App = React.createClass({
  getInitialState: function(){
    return (
      titles: {};
    )
  },

  componentDidMount: function(){
    this.setState({titles:'hello'});
  },

  render: function(){
    return (
      <div>
      <h1>{this.state.titles}</h1>
      </div>
    );
  }
});

React.render(<App/>, document.body);
