var db = require('../db/db');
var Event = db.Event;
var User = db.User;

exports.postEvent = function (req, res) {
  console.log(req.body);
  Event
    .create({title: req.body.title, category: req.body.category, 
             time: req.body.time, description: req.body.description, 
             location: req.body.location, tags: req.body.tags})
    .then(function (post) {
      res.send(post);
    });
};

exports.editEvent = function (req, res) {
  console.log(req.body);
  Event
    .find({where: {id: req.body.id} }, include: [{User}])
    .success(function(events) {

    }); 
};  