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

// Load the routing tables
require('../src/routes')(app)

let configFile = '.env';
if(process.env.NODE_ENV == "test") {
  configFile = '.env.test'
}

dotenv.load({ path: configFile });

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