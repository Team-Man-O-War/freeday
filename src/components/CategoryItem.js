var React = require('react');

//individual categories that will fit into CategoryBar component and apply filter.
var CategoryItem = React.createClass({
	render: function(){
		return (
      <div className="row">
        <div className="categoryItem col-xs-5 col-sm-1 col-sm-offset-1">
          <button>
          {this.props.children}Meetup</button>
        </div>
        <div className="categoryItem col-xs-5 col-sm-1">
          <button>
          {this.props.children}Eventbrite</button>
        </div>
        <div className="categoryItem col-xs-5 col-sm-1">
          <button>
          {this.props.children}Music</button>
        </div>
        <div className="categoryItem col-xs-5 col-sm-1">
          <button>
          {this.props.children}Video Gaming</button>
        </div>
        <div className="categoryItem col-xs-5 col-sm-1">
          <button>
          {this.props.children}Board Gaming</button>
        </div>
        <div className="categoryItem col-xs-5 col-sm-1">
          <button>
          {this.props.children}Social</button>
        </div>
        <div className="categoryItem col-xs-5 col-sm-1">
          <button>
          {this.props.children}Educational</button>
        </div>
        <div className="categoryItem col-xs-5 col-sm-1">
          <button>
          {this.props.children}Romantic</button>
        </div>
        <div className="categoryItem col-xs-5 col-sm-1">
          <button>
          {this.props.children}Athletic</button>
        </div>
        <div className="categoryItem col-xs-5 col-sm-1">
          <button>
          {this.props.children}Other</button>
        </div>
      </div>
		)
	}
});

module.exports = CategoryItem;