let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require(process.cwd() + '/bin/server');
chai.use(chaiHttp);

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
  }

  // Used in cast_vote.steps.js
  this.developer = undefined;
  this.vote = undefined;
  this.notes = undefined;
  this.response = undefined;
  this.notes = undefined;
  var $this = this;

  this.getVoteResponse = function (myCallback) {

    // POST
    // /stories/:Id/votes
    // {
    //   vote: x,
    //   developer: y
    // }
    // Where x in {1, 2, 3} etc

    var $this = this;

    var data = {
      developer: this.developer,
      vote: this.vote
    };

    if (this.notes) data.notes = this.notes;

    var postUrl = '/stories/' + this.storyId + '/votes';

    console.log('postUrl: ' + postUrl);

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

}
