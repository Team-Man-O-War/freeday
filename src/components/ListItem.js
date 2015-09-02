var React = require('react');

var ListItem = React.createClass({
    render: function() {
        return <div className="infinite-list-item">
        Event {this.props.num}
        </div>;
    }
});

module.exports = ListItem;