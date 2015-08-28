var express = require('express');
var app = express();
//path? fs? bodyparser? will need FB login & db schema.

app.use('/', express.static('client'));

app.listen(3000);