// During testing, "NODE_ENV" is set to "test"
process.env.NODE_ENV = 'test';

// Import required packages
// let mongoose = require("mongoose");
let Story = require(process.cwd() + '/src/story/story.model');

// Import required dev-dependencies for testing
let expect = require('chai').expect;

module.exports = function() {

  this.World = require('../world').World;



  // Clean the DB before running tests
  // TODO: Function should be moved to Hooks file
  Story.remove({}, function(err) {
    if (err) {
      throw err;
    }
  });

  let newStory = {
    name: "Start ballot",
    url: "https://github.com/story1.git",
    size: 1
  }

  let id;
  let statusCode;


  /*

    GIVEN I send a POST request with a new story
    THEN the response to that request contains an ID of the new Story in the system

    ---

    GIVEN I send a POST request with a new story
    THEN if I check the available stories via a GET request I can see the
    story in the system

  */



  this.Given(/^that I submit the URL '([^']+)'$/, function(arg1, callback) {
    this.makeAndSendPost('/stories', {url: arg1});
    callback();
  });

  this.Then(/the bot should return an id of that new ballot/, function(callback) {
    this.send.end((err, res) => {
      expect(res.status).to.equal(200);
    });
    callback();
  });


};