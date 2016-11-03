////////////////////////////////////
// cast_vote.js
//
// Tests for user casting a vote



let expect = require('chai').expect;

module.exports = function () {
  this.World = require('../support/world').World;

  this.Given(/^I cast a vote on "([^"]*)"$/, function (url, callback) {
    this.url = url;
    callback();
  });

  this.Given(/^I am identified by "([^"]*)"/, function (developer, callback)) {
    this.developer = developer;
    callback();
  }

  this.When(/^I select a (\d+)$/, function (option, callback) {
    this.option = option;
    callback();

  });

  this.Then(/^I should get a response back$/),
    function (callback) {
      this.getVoteResponse(function (res) {
        expect(res.status).to.be(200);
        callback();
      });
    });

}
