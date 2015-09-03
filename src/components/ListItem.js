var React = require('react');
var $ = require('jquery');

var ListItem = React.createClass({

  getInitialState: function() {
    return {

    };
  },

  // componentDidMount: function() {
  //   $.get('/map', function (data) {
  //     console.log(data);
  //   });
  // },

    render: function() {
      return (
        <div className="infinite-list-item">
          Eventdfsd {this.props.num}
        </div>
      )
    }
});

module.exports = ListItem;