var db = require('../db/db');
var Event = db.Event;
var User = db.User;

exports.postEvent = function (req, res) {
  console.log(req.body);
  Event
    .create({name: req.body.name, category: req.body.category, 
             time: req.body.time, description: req.body.description, 
             location: req.body.location, tags: req.body.tags})
    .then(function (post) {
      res.send(post);
    });
};

exports.singleEvent =  function (req, res) {
  Event
    .findOne({where: {id: req.params.id}})
    .then(function (event) {
      console.log(req.params.id);
      res.send(event);
    });
};

exports.editEvent = function (req, res) {
  console.log(req.body);
  Event
    .find(
      {where: {id: req.params.id}    
    })
    .then(function (event) {
      console.log(req.body);
      if (event) {
        event.updateAttributes({
          name: req.body.name, category: req.body.category, 
          time: req.body.time, description: req.body.description, 
          location: req.body.location, tags: req.body.tags
        }).then(function(event) {

          res.send(event);
        });
      }
      
  });
};  

exports.getEvents = function (req, res) {
  console.log(req.body);
  Event
    .findAll()
    .then(function (events) {
      res.send(events);
    });
};

exports.noMas = function (req, res) {
  Event
    .destroy({
      where: {
        id: req.params.id
    }}).then(function (event) {
      res.send({message: 'It\'s deleted!'});
  });
};