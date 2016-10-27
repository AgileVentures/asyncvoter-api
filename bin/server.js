var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var dotenv = require('dotenv');
var chalk = require('chalk');

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(require('../src/story/story.routes.js'));

dotenv.load({ path: '.env' });

mongoose.connect(process.env.MONGODB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:', chalk.red('✗')));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server", chalk.green('✓'));
});

var server = app.listen(process.env.PORT, function () {
  console.log('Your app listening on port ' + process.env.PORT + '!', chalk.green('✓'));
});

module.exports = server;
