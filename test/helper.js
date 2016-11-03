let server = require(process.cwd() + '/bin/server');

var mongoose = require('mongoose');

before(function (done) {
    mongoose.connection.on('connected', done);
});

module.exports = server;