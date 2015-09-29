var React = require('react');
var Modal = require('react-modal');
var Radium = require('radium');

var appElement = document.getElementById('main');

Modal.setAppElement(appElement);
Modal.injectCSS();

// Has full information on events and allows users to create new events.
var Event = React.createClass({
    getInitialState: function(){
      return { modalIsOpen: false, value: "Comments will go here" }; 
    },     

    openModal: function() {
      this.setState({modalIsOpen: true});
    },

    closeModal: function() {
      this.setState({modalIsOpen: false});
    },

    handleChange: function(event){
      this.setState({value: event.target.value});
    },

    render: function(){
      return (
        <div>
          <button onClick={this.openModal} style={styles.base}>
          {this.props.children}Event Information</button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal} 
            >
            <button onClick={this.closeModal} style={styles.close}>Close</button>
          <h1>{this.props.singleEvent.name}</h1>
          <h2 style={styles.time}>{this.props.singleEvent.time}</h2>
          <h3>Confirmed Attendance: {this.props.singleEvent.confirmed}</h3>
          <h3 style={styles.distance}> Distance: {this.props.singleEvent.distance} <a href={this.props.singleEvent.url}>(Click link for address)</a></h3>
                <br></br>
                <br></br>
                <br></br>
              <div style={styles.buttons}> 
                <button>I Will Attend</button>
                <button>I Might Attend</button>
                <button>Hide Event</button>
              </div>
                <br></br>
                <br></br>
            <div dangerouslySetInnerHTML={{__html: this.props.singleEvent.description}} />
                <br></br>
              <form id="comments" style={styles.comments}>
                <input type ='text' placeholder='Leave a Comment' onChange={this.handleChange}/>
                <button onClick={this.handleChange}>Submit</button>
                <div>{this.state.value}</div>
            </form>
            <h3><a href={this.props.singleEvent.url} style={styles.link}>{this.props.singleEvent.url}</a></h3>
              <br></br>
              <br></br>
          
          </Modal>
        </div>
      );
    }
});

var styles = {
  base: {
    background: 'steelblue',
    border: 0,
    borderRadius: 8,
    float: 'left',
    margin: '0 0 0 250px',
    color: 'black',
    height: '150px',
    width: '100%',
    fontFamily: 'Verdana',

    ':hover': {
      backgroundColor: 'powderblue'
    },

    ':focus': {
      backgroundColor: 'midnightblue'
    },

    ':active': {
      backgroundColor: 'midnightblue'
    },
  },
  time: {
    float:'right',
    color: 'steelblue',
  },
  distance: {
    float:'left',
  },
  buttons: {
    float:'left',
    margin: '0 1% 0 3%',
    color: 'steelblue',
    fontFamily: 'Verdana',
  },
  comments: {
    float:'right',
    padding: '2%',
    margin:"0 150px 0 0",
    fontSize: 20,
  },
  close: {
    fontSize: 28,
    background: 'crimson',
    borderRadius: 8,
    float: 'right',
    color: 'black',
    fontFamily: 'Verdana',
  }
};

module.exports = Radium(Event);
