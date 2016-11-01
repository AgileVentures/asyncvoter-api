let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require(process.cwd() + '/bin/server');
let expect = chai.expect;
chai.use(chaiHttp);

module.exports.World = function(callback) {

  this.send = undefined;
  this.get  = undefined;

  this.makeAndSendPost = function(route, data) {
    var thePost = chai.request(server).post(route);
    var theSend = thePost.send(data);
    this.send = theSend;
  }

  this.makeGetRequest = function(route) {
    this.get = chai.request(server).get(route);
  }

}
