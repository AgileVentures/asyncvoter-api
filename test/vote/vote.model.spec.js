// vote.model.spec.js
// Unit tests on the vote model
"use strict";

var mongoose = require('mongoose');

var Vote = require(process.cwd() + '/src/vote/vote.model');

var helperFile = require('../helper');
let cleanDatabase = helperFile.cleanDatabase;

var assert = require('chai').assert;

// Test the casting of votes
describe('Vote model tests', function () {

  var testStoryId = undefined

  // runs before each test
  beforeEach(function (done) {
    // clear out the database and populate with test story
    cleanDatabase(function () {
      // TODO: Use something like factory-girl (but for JS not rails)
      // insert a dummy story to work with
      var storyModel = require(process.cwd() + '/src/story/story.model')
      storyModel.create({
          name: 'Test Story',
          size: '0',
          url: 'https://github.com/AgileVentures/AsyncVoter/issues/7',
          userId: '@slackUser'
        },
        function (err, testStory) {
          // TODO: Do we need to handle this error better?
          if (err) throw err
          testStoryId = testStory._id
          done()
        });
    });
  });

  // We cast a vote of size 2
  // At the end we expect to be given a vote object with the same
  // details as we said
  it('create a vote, size 2 selected - not on a real story', function (done) {
    Vote.create({
      story: "dummy story id - not a mongo ID!!!",
      size: 2,
      userId: '@aSlackUser1'
    }, function (err, theVote) {
      assert.isNotNull(err, "We should not accept bogus story ids")
      done()
    });
  });

  it('create a vote, size 3 - no story provided', function (done) {
    Vote.create({
      story: null,
      size: 3,
      userId: '@aSlackUser2'
    }, function (err, theVote) {
      assert.isNotNull(err, "Vote created without story specified!")
      done()
    });
  });

  it('create a vote, story present but no size specified',
    function (done) {
      Vote.create({
        story: testStoryId,
        size: null,
        userId: '@aSlackUser3'
      }, function (err, theVote) {
        assert.isNotNull(err, "Vote created without size specified!")
        done()
      });
    }
  );


  it('create a vote, size 1 selected - on a real story',
    function (done) {

      var size = "1"

      Vote.create({
        story: testStoryId,
        size: size,
        userId: '@aSlackUser4'
      }, function (err, theVote) {

        assert.isNull(err, "Valid vote entered, but error received")

        assert.isObject(theVote,
          "Vote created but no vote object produced")
        assert.isOk(theVote._id,
          "Vote created but missing Mongo ID!")

        var id = theVote._id

        Vote.findById(id, function (err, theVote) {
          assert.isNull(err,
            "Unexpected error trying to find vote")
          assert.isObject(theVote,
            "Vote not an object when finding vote")
          assert.isOk(theVote.story, "Story not present on vote")
          assert.isOk(theVote.size, "Size not present on vote")
          assert.equal(String(theVote.story), String(testStoryId),
            "The vote's Story does not match the one given")
          assert.equal(theVote.size, size,
            "The vote's size does not match the one given")
          assert.equal(theVote.userId, '@aSlackUser4',
            "The vote's userId does not match the one given")
          done()
        });
      });
    }
  );
});
