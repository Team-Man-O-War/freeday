var Router = require('express').Router;
var express = require('express');
require('./db/db.js');
var router = new Router();

router.use(express.static('client'));

module.exports = router;
