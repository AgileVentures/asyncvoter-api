var express = require('express');
var app = express();


app.use(require('../src/story/story.routes.js'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});