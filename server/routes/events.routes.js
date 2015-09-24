var eventCtrl = require('../controllers/event.controller');
var router = require('express').Router();

router.post('/postevent', eventCtrl.postEvent);


module.exports = router;