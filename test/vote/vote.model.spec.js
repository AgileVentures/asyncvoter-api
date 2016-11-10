// vote.model.spec.js
// Unit tests on the vote model
"use strict";

var mongoose = require('mongoose');


var Vote = require(process.cwd() + '/src/vote/vote.model');

var helperFile = require('../helper');
let cleanDatabase = helperFile.cleanDatabase;


var assert = require('chai').assert;


// Test the casting of votes
describe('Casting a size', function () {

  beforeEach(function (done) {
    cleanDatabase(function () {
      done();
    });
  });

  // We cast a vote of size 2
  // At the end we expect to be given a vote object with the same
  // details as we said
  it('castVote, size 2 selected - not on a real story', function (done) {
    // This should fail - vote must be dependant on an actual story!
    var storyId = "dummy story id - not a mongo ID!!!"

    Vote.create({
      story: storyId,
      size: 2
    }, function (err, theVote) {
      assert.isNotNull(err, "We should not accept bogus story ids")
      done()
    });

  });


  it('castVote, size 1 selected - on a real story', function (done) {
    // This should fail - vote must be dependant on an actual story!

    let request = helperFile.request;

    request()
      .post('/stories')
      .send({
        url: 'https://github.com/AgileVentures/AsyncVoter/issues/4',
        size: '3',
        name: 'Start Vote Feature'
      })
      .end(function (err, res) {

        var storyId = res.body._id
        var size = 1

        Vote.create({
          story: storyId,
          size: size
        }, function (err, theVote) {

          assert.isNull(err)

          assert.isObject(theVote)
          assert.isOk(theVote._id)

          var id = theVote._id

          Vote.findById(id, function (err, theVote) {
            assert.isNull(err)
            assert.isObject(theVote)
            assert.isOk(theVote.story)
            assert.isOk(theVote.size)
            assert.equal(theVote.story, storyId,
              "The votes story does not match")
            assert.equal(theVote.size, size,
              "The size size does not match")
            done()
          });


        });

      });

  });



});
