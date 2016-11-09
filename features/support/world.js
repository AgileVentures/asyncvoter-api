let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require(process.cwd() + '/bin/server');
chai.use(chaiHttp);
let Story = require(process.cwd() + '/src/story/story.model');

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
    return this.get;
  }

  this.createVotes = function(votes, done) {
    Story.create(votes,
        function (err, story) {
            if (err) throw err;
              done();
        }
    );
  }
  this.strToIndex = function(str) {
    switch(str) {
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
