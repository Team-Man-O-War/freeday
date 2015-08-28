var express = require('express');
var app = express();
//path? fs? bodyparser? will need FB login & db schema.

app.use('/', express.static('client'));//should serve index.html page.

app.listen(3000);