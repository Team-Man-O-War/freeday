var express = require('express');
var app = express();
//http? path? fs? bodyparser? will need FB login & db schema.

app.use('/', express.static(__dirname + '/../client'));//should serve index.html page.

app.listen(3000);