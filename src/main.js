var React = require('react');
var Header = require('./components/Header');
var SearchBar = require('./components/SearchBar');
var Footer = require('./components/Footer');
var List = require('./components/List');
var Map = require('./components/Map');

var App = React.createClass({
  render: function(){
    return (
      <div>
      {this.props.children}
        <Header/>

        <br></br>

        <Map/>
        
        <h3>Event List</h3>

        <List/>

        <Footer/>

      </div>
    );
  }
});

React.render(<App/>, document.getElementById('main'));

