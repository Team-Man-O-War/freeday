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
      meetupJSON: [],
      userEvents: null
    };
  }, 

  componentDidMount: function() {
    var self = this;

    AppDispatcher.getMeetupData(function(data) {
      self.setState({
        events: data.results
      });
      self.setState({
        elements: self.buildElements(0, 100)
        });
    });
    $.get('/', function (data) {
      self.setState({
        userEvents: data
      });
    });
  },

  buildElements: function(start, end) {
    var events = [];
    var eventArray = [];
    if (this.state.userEvents){
       for (var i = 0; i < this.state.userEvents.length; i+=1) {
      events.push(this.state.userEvents[i]);
    }
    }
    var filtered =  this.state.events.filter(function(e) {
      var newEvent = {};
        var d = new Date(e.time);
        newEvent.name = e.name;
        newEvent.description = e.description;//.substring stopped working
        newEvent.url = e.event_url;
        newEvent.distance = Math.round(e.distance) + " miles";
        // newEvent.urlName = e.group.urlname;
        newEvent.time = d.toLocaleString();
        newEvent.confirmed = e.yes_rsvp_count;
        newEvent.category;
    
      events.push(newEvent);
      // console.log(events);
    });
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
        newElements = that.buildElements(elemLength, elemLength + 15);
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
          <Infinite elementHeight={150}
             containerHeight={500}
             infiniteLoadBeginBottomOffset={15}
             onInfiniteLoad={this.handleInfiniteLoad}
             loadingSpinnerDelegate={this.elementInfiniteLoad()}
             isInfiniteLoading={this.state.isInfiniteLoading}>
          {this.state.elements}
        </Infinite>
      )
    }
});

module.exports = List;