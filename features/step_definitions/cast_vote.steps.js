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
    var $this = this;

    this.getVoteResponse(function (err, res) {
      if (err) return callback(err);
      $this.response = res;

      assert(res.status == 200, "response from server was bad - " + res.status);
      callback();
    });


  });

  this.Then(/^the response should include the issue being voted on$/, function (callback) {
    assert(this.response.body.issue == this.issue, "Issue sent does not match issue returned");
    callback();
  });

  this.Then(/^that (\d+) was selected$/, function (vote, callback) {
    assert(vote == this.vote,
      "vote to be checked does not match vote declared earlier");
    assert(this.response.body.vote == this.vote,
      "vote received does not match vote declared earlier");
    callback();
  });

  this.When(/^I give the following notes "([^"]*)"$/, function (notes, callback) {
    this.notes = notes;
    callback();
  });


  this.Then(/^the response should include the same notes back$/, function (callback) {
    assert(this.notes == this.response.body.notes,
      "Notes given were not the same as those received back");

    callback();
  });


}
