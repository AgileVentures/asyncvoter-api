// vote.controller.spec.js
// Unit tests on the votes controller
"use strict";

var DatabaseCleaner = require('database-cleaner');
var databaseCleaner = new DatabaseCleaner('mongodb');
var mongoose = require('mongoose');

var voteController = require(process.cwd() + '/src/vote/vote.controller');


var assert = require('chai').assert;


// Test the casting of votes
describe('Casting a vote', function () {

  var server = require(process.cwd() + '/bin/server');

  before(function (done) {
    console.log("In before(...)");
    mongoose.connection.on('connected', done);
  });

  beforeEach(function (callback) {
    console.log("In beforeEach(...)")
    databaseCleaner.clean(mongoose.connections[0].db, function () {
      callback();
    });
  });

  afterEach(function () {
    server.close();
  });


  // We cast a vote of 2
  // At the end we expect to get back a vote object with the same details as we said
  // There should also be a vote entry in the database with the same details
  it('castVote - option 2 selected - testing response', function (done) {
    var isssue = "https://github.com/AgileVentures/AsyncVoter/issues/7",
      developer = "Raphael Krausz",
      vote = 2;
    console.log("++++ A");
    voteController.castVote(issue, developer, vote, function (err, theVote) {
      console.log("++++ B");
      if (err) done(err);
      console.log("++++ C");

      assert(theVote.issue == issue, "issue sent matches response");
      assert(theVote.developer == developer, "developer sent matches response");
      assert(theVote.vote == vote, "vote sent matches response");

      console.log("++++ D");
      done();
      console.log("++++ E");
    });
  });

});
