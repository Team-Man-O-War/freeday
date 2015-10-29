var eventCtrl = require('../controllers/event.controller');
var router = require('express').Router();

router.post('/postevent', eventCtrl.postEvent);
router.post('/post', eventCtrl.postEvent);
router.get('/', eventCtrl.getEvents);
router.get('/:id', eventCtrl.singleEvent);
router.put('/:id', eventCtrl.editEvent);
router.delete('/:id', eventCtrl.noMas);

module.exports = router;