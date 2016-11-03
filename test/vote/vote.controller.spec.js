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

  // Needed?
  var server = require(process.cwd() + '/bin/server');

  before(function (done) {
    console.log("In before(...)");
    // Something else goes here???

    mongoose.connection.on('connected', function (err) {
      console.log("**** HERE I AM *****"); // Never reached!
      done();
    });


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
  // At the end we expect to be given a vote object with the same details as we said
  it('castVote - option 2 selected - testing response', function (done) {
    var issue = "https://github.com/AgileVentures/AsyncVoter/issues/7",
      developer = "Raphael Krausz",
      vote = 2;

    voteController.castVote(issue, developer, vote, function (err, theVote) {

      assert.isNotOk(err, 'Error returned');

      if (err) return done(err);

      assert.isOk(theVote, 'a Vote object was given');

      assert.isOk(theVote.issue, 'a Vote object has issue set');
      assert.isOk(theVote.developer, 'a Vote object has developer set');
      assert.isOk(theVote.vote, 'a Vote object has vote set');

      assert(theVote.issue == issue, "issue sent matches response");
      assert(theVote.developer == developer, "developer sent matches response");
      assert(theVote.vote == vote, "vote sent matches response");

      done();
    });
  });


  // We cast a vote of 2
  // At the end we expect to get back a vote object with the same details as we said
  // There should also be a vote entry in the database with the same details
  it('castVote - option 2 selected - testing response', function (done) {
    var issue = "https://github.com/AgileVentures/AsyncVoter/issues/7",
      developer = "Raphael Krausz",
      vote = 2;

    voteController.castVote(issue, developer, vote, function (err, theVote) {

      assert.isNotOk(err, 'Error returned');

      if (err) return done(err);

      assert.isOk(theVote, 'a Vote object was given');

      assert.isOk(theVote.issue, 'a Vote object has issue set');
      assert.isOk(theVote.developer, 'a Vote object has developer set');
      assert.isOk(theVote.vote, 'a Vote object has vote set');

      assert(theVote.issue == issue, "issue sent matches response");
      assert(theVote.developer == developer, "developer sent matches response");
      assert(theVote.vote == vote, "vote sent matches response");

      done();
    });
  });


});
