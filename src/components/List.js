var React = require('react');
var ListItem = require('./ListItem');
var Infinite = require('react-infinite');
var meetup = require('../meetup.json');
var $ = require('jquery');


var List = React.createClass({
  getInitialState: function() {
    return {
      elements: [],
      isInfiniteLoading: false,
      events: null,
      meetupJSON: []
    };
  }, 

  componentDidMount: function() {
    var self = this;
    $.get('/meetup', function (data) {

        self.setState({
          events: data.results
        });
        self.setState({
          elements: self.buildElements(0, 20)
        });
    });
  },

  buildElements: function(start, end) {
    var events = [];
    var eventArray = [];
    console.log(this.state.events);
    var filtered =  this.state.events.filter(function(e) {
      events.push(e.name);
      events.push(e.created);
      events.push(e.description);
    });
    console.log(events);
    if (this.state.events.length > 0)  {
      for (var i = start; i < end; i++) {
        eventArray.push(<ListItem singleEvent={events[i]} key={i} num={i} />);
      }
      return eventArray;
    }
  },

  handleInfiniteLoad: function() {
    var that = this;

    this.setState({
        isInfiniteLoading: true
    });
    setTimeout(function() {
      var elemLength = that.state.elements.length,
        newElements = that.buildElements(elemLength, elemLength + 10);
      that.setState({
        isInfiniteLoading: false,
        elements: that.state.elements.concat(newElements)
      });
    }, 1500);
  },

    elementInfiniteLoad: function() {
        return (
        <div className="infinite-list-item">
            Loading Events...
        </div>
      )
    },

    render: function() {
      // var meetupEventList = this.state.events;
      // console.log(meetupEventList);
      
        return (
          <Infinite elementHeight={20}
             containerHeight={250}
             infiniteLoadBeginBottomOffset={200}
             onInfiniteLoad={this.handleInfiniteLoad}
             loadingSpinnerDelegate={this.elementInfiniteLoad()}
             isInfiniteLoading={this.state.isInfiniteLoading}>
          {this.state.elements}
        </Infinite>
      )
    }
});

module.exports = List;