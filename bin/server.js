var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(require('../src/story/story.routes.js'));

var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = server;