var assert = require('chai').assert;


module.exports = function () {
  this.World = require('../support/world').World;
  
  this.Given(/^there is a story with votes$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.Then(/^the response should be a list of votes on that story$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.Given(/^there is a story with no votes$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.When(/^the client requests a list of votes$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.Then(/^the response should be a an empty list$/, function (callback)
  {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });
}
