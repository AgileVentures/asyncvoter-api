var express = require('express');
var app = express();


app.use(require('../src/story/story.routes.js'));

var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = server;