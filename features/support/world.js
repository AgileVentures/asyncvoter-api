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
  this.setUrl = function (url) {
    this.url = url
}

  // Used in cast_vote.steps.js
  this.option = undefined;
  // this.setOption = function(option) {
  //   this.option = option
  // }

  // Used in cast_vote.steps.js
  this.notes = undefined;
  // this.setNotes = 

  // Used in cast_vote.steps.js
  this.request = undefined;
  this.getRequest = function () {
    if (this.request) return;

    var data = {
      url: this.url,
      vote: this.option
    };

    this.makeAndSendPost('/votes', data);

    // TODO: Hmmmm..... Do I need the two variables?
    this.request = this.send

  };


}
