var React = require('react');
var Modal = require('react-modal');

var appElement = document.getElementById('main');

Modal.setAppElement(appElement);
Modal.injectCSS();


// Has full information on events and allows users to create new events.
// Will be a modal and include react-dropzone for file upload of image/pdf

var Event = React.createClass({
    getInitialState: function(){
      return { modalIsOpen: false, value: "Comments will go here" }; 
    } ,     

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
          <button type="default-primary" onMouseOver={this.openModal} onClick={this.openModal}>Open Modal</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
          >
          <button onClick={this.closeModal}>Close</button>
          <h1>Your Event</h1>
            <div> Address: 100 Super Cool St. Los Angeles, CA 12345 </div>
              <br></br>
              <button onClick="Thanks!">I Will Attend</button>
              <button>I Might Attend</button>
              <button>Hide Event</button>
              <button>Request Info</button>
              <br></br>
              <div> 10/25 Attendees </div>
            <br></br>
            <div>
            Event description: Yada yada yada Yada yada yada Yada yada yada
            Yada yada yada Yada yada yada Yada yada yada
            Yada yada yada Yada yada yada Yada yada yada etc etc etc...
            </div>
            <br></br>
            <br></br>
            <form id="comments">
              <input type ='text' placeholder='Leave a Comment' onChange={this.handleChange}/>
              <button onClick={this.handleChange}>Submit</button>
              <div>{this.state.value}</div>
            </form>
          </Modal>
        </div>
      );
    }
});

module.exports = Event;
