var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(require('../src/story/story.routes.js'));

mongoose.connect('mongodb://localhost/asynchvoter');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");
});

var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = server;