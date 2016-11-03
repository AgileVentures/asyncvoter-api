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
  it('castVote - option 2 selected - testing response - no notes', function (done) {
    var issue = "castVote - option 2 selected - testing response - no notes",
      developer = "Raphael Krausz",
      vote = 2;

    voteController.castVote(issue, developer, vote, null, function (err, theVote) {

      assert.isNotOk(err, 'Error returned');

      if (err) return done(err);

      assert.isOk(theVote, 'Vote object missing');

      assert.isOk(theVote.issue, 'the given vote is missing issue');
      assert.isOk(theVote.developer, 'the given vote is missing developer');
      assert.isOk(theVote.vote, 'the given vote is missing vote');

      assert(theVote.issue == issue, "issue sent does not match response");
      assert(theVote.developer == developer, "developer sent does not match response");
      assert(theVote.vote == vote, "vote sent does not match response");

      assert.isNotOk(theVote.notes, "the returned vote has filled in notes");

      done();
    });
  });


  // We cast a vote of 1
  // There should also be a vote entry in the database with the same details
  it('castVote - option 1 selected - testing database contains new vote - no notes',
    function (done) {
      var issue = "castVote - option 1 selected - testing database contains new vote - no notes",
        developer = "Raphael Krausz",
        vote = 1;

      voteController.castVote(issue, developer, vote, null, function (err, theVote) {

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


  // We cast a vote of 2
  // At the end we expect to be given a vote object with the same details as we said
  it('castVote - option 2 selected - testing response - with notes', function (done) {
    var issue = "castVote - option 2 selected - testing response - with notes",
      developer = "Raphael Krausz",
      vote = 2,
      notes = "Aesthetic ennui organic cronut eiusmod. Health goth commodo trust fund stumptown sint pabst, art party small batch vegan biodiesel tattooed hexagon humblebrag vape. Viral mumblecore normcore hashtag letterpress accusamus skateboard, cronut williamsburg hexagon. Trust fund cardigan pitchfork, pickled occupy keffiyeh raclette enamel pin viral mixtape post-ironic. Marfa celiac pariatur, echo park enamel pin meditation poutine cardigan. Bushwick tofu tattooed tote bag mixtape. Hot chicken voluptate banh mi bicycle rights, sartorial williamsburg flexitarian meh normcore DIY.";

    voteController.castVote(issue, developer, vote, notes, function (err, theVote) {

      assert.isNotOk(err, 'Error returned - ' + err);

      if (err) return done(err);

      assert.isOk(theVote, 'Vote object missing');

      assert.isOk(theVote.issue, 'the given vote is missing issue');
      assert.isOk(theVote.developer, 'the given vote is missing developer');
      assert.isOk(theVote.vote, 'the given vote is missing vote');
      assert(theVote.notes != undefined, "notes should be defined");
      assert.isOk(theVote.notes, "the given filled in notes");

      assert(theVote.issue == issue, "issue sent does not match response");
      assert(theVote.developer == developer, "developer sent does not match response");
      assert(theVote.vote == vote, "vote sent does not match response");

      assert(theVote.notes == notes, "notes sent do not match the response");

      done();
    });
  });


  // We cast a vote of 1
  // There should also be a vote entry in the database with the same details
  it('castVote - option 1 selected - testing database contains new vote - with notes', function (done) {
    var issue = "castVote - option 1 selected - testing database contains new vote - with notes",
      developer = "Raphael Krausz",
      vote = 1,
      notes = "Semiotics meh authentic whatever. Sed iPhone ex helvetica. Bushwick beard fugiat unicorn, brunch velit 8-bit fanny pack vape af. DIY eu nulla direct trade leggings. Franzen actually artisan, consequat messenger bag ad leggings hoodie nesciunt laborum cardigan. Gluten-free pabst helvetica, fanny pack celiac everyday carry incididunt mollit lomo cillum. Wayfarers waistcoat eu, gochujang excepteur truffaut williamsburg +1 id deserunt humblebrag lo-fi.";

    voteController.castVote(issue, developer, vote, notes, function (err, theVote) {

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
        assert(theVote.notes == notes, "notes sent do not match the response");

        done();

      });


    });
  });


});
