////////////////////////////////////
// cast_vote.js
// 
// Tests for user casting a vote



let expect = require('chai').expect;

module.exports = function () {

  this.World = require('../support/world').World;

  this.Given(/^I cast a vote on "([^"]*)"$/, function (url, callback) {
    this.setUrl(url);
    callback();
  });

  this.When(/^I select a (\d+)$/, function (option, callback) {
    this.option = option;
    callback();
  });

  this.When(/^I give the following notes "([^"]*)"$/, function (notes, callback) {
    this.notes = notes;
    callback();
  });


  this.Then(/^the response should include the issue url being voted on$/, function (callback) {
    this.getRequest();
    expect(this.response.url).to.equal(this.url);
    callback();
  });



};
