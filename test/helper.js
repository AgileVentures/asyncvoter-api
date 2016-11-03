let server = require(process.cwd() + '/bin/server');

var mongoose = require('mongoose');

var DatabaseCleaner = require('database-cleaner');
var databaseCleaner = new DatabaseCleaner('mongodb');

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);


before(function (done) {
  mongoose.connection.on('connected', done);
});

cleanDatabase = function (callback) {
  databaseCleaner.clean(mongoose.connections[0].db, function () {
    callback();
  });
}

module.exports = {
  server,
  request: function () {
    return chai.request(server);
  },
  cleanDatabase: cleanDatabase
};