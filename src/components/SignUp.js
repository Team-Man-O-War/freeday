var React = require('react');
var Radium = require('radium');
var $ = require('jquery');
var AppDispatcher = require('../flux/Dispatcher');
//require jquery and use it to send post request

//For users signing up for app.
var SignUp = React.createClass({
  getInitialState: function () {
    return {
      userInput: ''
    };
  },

  componentDidMount: function() {
    // console.log(AppDispatcher.handleLogin());
    // console.log(localStorage.jwt);
  },

  handleSubmitEvent: function () {
   var userEvent = {};
   userEvent.name = $('#name').val();
   userEvent.description = $('#description').val();
   userEvent.location = $('#location').val();
   $.post('/post', userEvent, function () {
     userEvent = {};
   });
 },

  handleLogout: function () {
    delete localStorage.jwt;
    location.reload();
  },

render: function(){
        
   // if (!localStorage.token && !localStorage.jwt) {
       return ( 
         <div>
           <form onSubmit={this.handleSubmit}>
             <label>Sign Up</label>
             <input type="text" placeholder= "username" style={styles.input1}>
               {this.props.children}
               </input>
             <input type="password" placeholder= "password" style={styles.input2}>
               {this.props.children}
               </input>
             <button style={styles.base}>
               {this.props.children}Submit</button>
           </form>   
           <form onSubmit={this.handleSubmitEvent}>
              <input type ='text' placeholder='Event Name' id='name'/>
                <br></br>
                <br></br>
                <input type ='text' placeholder='Event Description' id='description'/>
                <br></br>
                <br></br>
              <input type ='text' placeholder='Event Address' id='location'/>
                  <br></br>
                  <h4>Event Time: </h4>
                  <input type="datetime-local" name="eventtime" id='time'/>
                  <br></br>
                  <br></br>
                <br></br>
                  <button type="submit">
                  Create Event
                  </button>
           </form>
         </div>  
       )
   //   }else{
   //   return (
   //     <div>
   //       <button onClick={this.handleLogout}>Logout</button>
   //     </div>
   //   )
   // }
 }
});

var styles = {
 base: {
   background: 'steelblue',
   border: 0,
   borderRadius: 8,
   color: 'black',
   padding: '.4% .8% .4% .8%',
   margin: '0 0 0 .5%',
   fontFamily: 'Verdana',

   ':hover': {
     backgroundColor: 'powderblue'
   },

   ':focus': {
     backgroundColor: 'steelblue'
   },

   ':active': {
     backgroundColor: 'midnightblue'
   },
 },

 input1: {
   backgroundColor: 'seashell',
   color: 'black',
   borderRadius: 6,
   margin: '.2% .7% .2% .7%',
   padding: '.3%',
 },

   input2: {
   backgroundColor: 'seashell',
   color: 'black',
   borderRadius: 6,
   padding: '.3%',
  }
};

module.exports = Radium(SignUp);