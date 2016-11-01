// During testing, "NODE_ENV" is set to "test"
process.env.NODE_ENV = 'test';

// Import required packages
let mongoose = require("mongoose");
let Story = require(process.cwd() + '/src/story/story.model');

// Import required dev-dependencies for testing
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require(process.cwd() + '/bin/server');
let expect = chai.expect;
chai.use(chaiHttp);

module.exports = function() {

  var World = function(callback) {
    //

  }



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

  this.Then(/the bot should return an id of that new ballot/, function(done) {

    chai.request(server)
      .get('/stories')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body[0]._id).to.equal(id);

      });

    done();

  });


  this.Given(/^that I submit the URL '([^']+)'$/, function(arg1, callback) {

    chai.request(server)
      .post('/stories')
      .send({
        url: arg1
      })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        id = res.body._id
      });

    callback();
  });


  this.When(/^I make a GET request to "([^"]*)"$/, function(arg1, callback) {
    // TODO: we really need to be able to communicate between the WHEN and the THEN
    // and we don't here - we're just faking it until we make it ATM.

    chai.request(server)
      .get('/stories')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        statusCode = Number(res.status); // TODO: Does not work!
      });


    callback();
  });

  this.Then(/^the response status code should be "([^"]*)"$/, function(arg1, callback) {
    // TODO: Fix this, see WHEN .. GET request above
    chai.request(server)
      .get('/stories')
      .end((err, res) => {
        expect(res.status).to.equal(Number(arg1));
      });


    callback();
  });


};