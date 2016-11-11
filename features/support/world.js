let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require(process.cwd() + '/bin/server');
chai.use(chaiHttp);
let Story = require(process.cwd() + '/src/story/story.model');

module.exports.World = function (callback) {

  this.send = undefined;
  this.get = undefined;

  this.makeAndSendPost = function (route, data) {
    var thePost = chai.request(server).post(route);
    var theSend = thePost.send(data);
    this.send = theSend;
  }

  this.makeGetRequest = function (route) {
    this.get = chai.request(server).get(route);
    return this.get;
  }

  // Used in cast_vote.steps.js
  this.size = undefined;
  this.response = undefined;

  var $this = this;

  this.getVoteResponse = function (myCallback) {

    // POST
    // /stories/:Id/votes
    // {
    //   size: x
    // }
    // Where x in {1, 2, 3} etc

    var $this = this;

    var data = {
      size: this.size
    };

    if (this.notes) data.notes = this.notes;

    var postUrl = '/stories/' + this.storyId + '/votes';

    this.makeAndSendPost(postUrl, data);

    this.send.end(function (err, res) {
      $this.response = res;
      myCallback(err, res);
    });
  }


  this.storyId = undefined;
  this.setupStory = function (name, url, myCallback) {
    // POST
    // name: "Our test story"
    // size: 0
    // url: "https://github.com/AgileVentures/AsyncVoter/issues/7"
    // Grab the ID - res.body._id

    var data = {
      url: url,
      size: "0",
      name: name
    };

    this.makeAndSendPost('/stories', data);
    this.send.end(function (err, res) {
      $this.response = res;
      $this.storyId = $this.response.body._id;
      myCallback();
    });
  }

  // used in start_vote
  this.createVotes = function (votes, done) {
    Story.create(votes,
      function (err, story) {
        if (err) throw err;
        done();
      }
    );
  }
  this.strToIndex = function (str) {
    switch (str) {
    case 'first':
      return 0;
    case 'second':
      return 1;
    case 'third':
      return 2;
    case 'fourth':
      return 3;
    case 'fifth':
      return 4;
    default:
      return str;
    }
  }
}
