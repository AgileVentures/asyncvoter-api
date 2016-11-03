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
  this.url = undefined;
  this.developer = undefined;
  this.option = undefined;
  this.notes = undefined;
  this.getVoteResponse = function (myCallback) {
    var data = {
      url: this.url,
      developer: this.developer,
      option: this.option
    };

    this.makeAndSendPost('/votes', data);
    this.send.end(function (err, res) {
      myCallback(err, res);
    });

  }


}
