// During testing, "NODE_ENV" is set to "test"
process.env.NODE_ENV = 'test';

// Import required packages
// let mongoose = require("mongoose");
// let Story = require(process.cwd() + '/src/story/story.model');

// Import required dev-dependencies for testing
let expect = require('chai').expect;

module.exports = function() {

  this.World = require('../support/world').World;



  // Clean the DB before running tests
  // TODO: Function should be moved to Hooks file
  // Story.remove({}, function(err) {
  //   if (err) {
  //     throw err;
  //   }
  // });


  /*

    GIVEN I send a POST request with a new story
    THEN the response to that request contains an ID of the new Story in the system

    ---

    GIVEN I send a POST request with a new story
    THEN if I check the available stories via a GET request I can see the
    story in the system

  */


  // start_vote.feature

  this.Given(/^that I submit the URL '([^']+)'$/, function(arg1, callback) {
    this.makeAndSendPost('/stories', {
      url: arg1
    });
    callback();
  });

  this.Then(/the bot should return an id of that new ballot/, function(callback) {
    this.send.end((err, res) => {

      // TODO: do we want to use these assertion types

      expect(res.status).to.equal(200);
      // expect(true).to.equal(false);
      // TODO: "TRUE does not equal FALSE" - would be a nicer message
      callback();

    });
  });

  // end of start_vote.feature steps


  // test.feature
  this.When(/^I make a GET request to "([^"]*)"$/, function(arg1, callback) {
    this.makeGetRequest(arg1);
    callback();
  });


  this.Then(/^the response status code should be "([^"]*)"$/, function(arg1, callback) {

    this.get.end((err, res) => {
      console.log("BODY OUTPUT: ", res.body);
      expect(res.status).to.equal(Number(arg1));

      callback();
    });
  });

  // end of test.feature



};
