// vote.controller.spec.js
// Unit tests on the votes controller
"use strict";

var mongoose = require('mongoose');


var Vote = require(process.cwd() + '/src/vote/vote.model');
var voteController = require(process.cwd() + '/src/vote/vote.controller');

var helperFile = require('../helper');
let request = helperFile.request;
let cleanDatabase = helperFile.cleanDatabase;


var assert = require('chai').assert;


// Test the casting of votes
describe('Casting a vote', function () {

  beforeEach(function (done) {
    cleanDatabase(function () {
      done();
    });
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

      assert(theVote.issue == issue, "issue sent does not match response");
      assert(theVote.developer == developer, "developer sent does not match response");
      assert(theVote.vote == vote, "vote sent does not match response");

      done();
    });
  });


  // We cast a vote of 1
  // There should also be a vote entry in the database with the same details
  it('castVote - option 1 selected - testing database contains new vote ', function (done) {
    var issue = "castVote - option 1 selected - testing database contains new vote",
      developer = "Raphael Krausz",
      vote = 1;

    voteController.castVote(issue, developer, vote, function (err, theVote) {

      assert.isNotOk(err, 'Error returned');
      if (err) return done(err);

      Vote.find({ issue: issue, developer: developer }, function (err, docs) {
        assert.isNotOk(err, 'Error finding document in database');
        if (err) return done(err);

        assert.isOk(docs.length == 1, "A single Vote document was not returned");

        var theVote = docs[0];

        assert(theVote.issue == issue, "issue sent does not match response");
        assert(theVote.developer == developer, "developer sent does not match response");
        assert(theVote.vote == vote, "vote sent does not match response");

        done();

      });


    });
  });



});
