var React = require('react');

var ListItem = React.createClass({
    render: function() {
        return <div className="infinite-list-item">
          <a href='"' + {this.props.num} + '"'>
        Event {this.props.num}
          </a>
        </div>;
    }
});

module.exports = ListItem;