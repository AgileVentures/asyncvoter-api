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

  // Used in cast_vote.steps.js
  this.response = undefined;
  this.getVoteResponse = function (myCallback) {

    var data = {
      url: this.url,
      developer: this.developer
    };

    if (this.option) data.vote = this.option;


    this.makeAndSendPost('/votes', data);
    this.send.end((err, res) => {
      console.log("************************ HERE");
      console.log('==============response:', res);
      if (err) throw err;
      this.response = res;
      myCallback(res);
    });

  }


}
