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
  this.issue = undefined;
  this.developer = undefined;
  this.vote = undefined;
  this.notes = undefined;
  this.response = undefined;
  this.getVoteResponse = function (myCallback) {
    var data = {
      issue: this.issue,
      developer: this.developer,
      vote: this.vote
    };

    this.makeAndSendPost('/votes', data);
    this.send.end(function (err, res) {
      myCallback(err, res);
    });

  }


}
