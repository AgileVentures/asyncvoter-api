////////////////////////////////////
// cast_vote.js
//
// Tests for user casting a vote

var assert = require('chai').assert;

module.exports = function () {
  this.World = require('../support/world').World;

  this.Given(/^I cast a vote on "([^"]*)"$/, function (issue, callback) {

    var $this = this;

    this.setupStory("Test story for cast vote feature", issue,
      function () {
        assert($this.response.status >= 200 && $this.response.status < 300,
          "Setting up story - response from server was bad - "
          + $this.response.status);
        callback();
      });
  });

  this.When(/^I select the size (\d+)$/, function (size, callback) {
    this.size = size;
    callback();
  });

  this.Then(/^I should get a response back$/, function (callback) {

    this.getVoteResponse(function (err, res) {
      assert.isNull(err, "Error found " + JSON.stringify(err));

      assert(res.status >= 200 && res.status < 300,
        "response from server was bad - " + res.status);

      callback();
    });

  });

  this.Then(/^the response should include the story being voted on$/,
    function (callback) {
      assert.equal(this.response.body.story, this.storyId,
        "Story sent does not match story returned");
      callback();
  });

  this.Then(/^that (\d+) was selected$/, function (size, callback) {
    assert.equal(size, this.size,
      "size to be checked does not match size declared earlier");
    assert.equal(this.response.body.size, this.size,
      "size received does not match size declared earlier");
    callback();
  });

  this.When(/^I forget to specify the size$/, function (callback) {
    this.size = null;
    callback();
  });

  this.Then(/^I should get an error back$/, function (callback) {
    this.getVoteResponse(function (err, res) {
      assert.isNotNull(err, "Error expected but not received");
      callback();
    });
  });

  // TODO: Test casting votes with no story
/*

  this.Given(/^forget to specify the issue$/, function (callback) {
    this.storyId = null;
    callback();
  });

*/
}
