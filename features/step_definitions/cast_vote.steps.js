////////////////////////////////////
// cast_vote.js
//
// Tests for user casting a vote

var assert = require('chai').assert;

module.exports = function () {
  this.World = require('../support/world').World;

  this.Given(/^I cast a vote on "([^"]*)"$/, function (issue, callback) {
    this.issue = issue;
    callback();
  });

  this.Given(/^I am identified by "([^"]*)"/, function (developer, callback) {
    this.developer = developer;
    callback();
  });

  this.When(/^I select a (\d+)$/, function (vote, callback) {
    this.vote = vote;
    callback();
  });

  this.Then(/^I should get a response back$/, function (callback) {
    this.getVoteResponse(function (err, res) {
      if (err) return callback(err);
      assert(res.status == 200, "response from server was bad - " + res.status);
      callback();
    });
  });

}
