var chai = require("chai");
var chaiHttp = require("chai-http");
chai.use(chaiHttp);
var should = chai.should;
var server = require(process.cwd() + "/bin/server");

module.exports = function() {
  var newStory = {
      url: 'https://github.com/AgileVentures/AsyncVoter/issues/4',
      size: '3',
      name: 'Start Vote Feature'
  }

  this.Given(/that I submit the URL\s+['"]([^'"]*)['"]/, function(_url, callback) {

    chai.request(server)
        .post('/stories')
        .send(newStory)
        .end(function (err, res) {
            res.should.have.status(200);
            // console.dir("hi!" + JSON.stringify(res.body))
            res.body.url.should.be.eql(_url);
        callback();
        });

  });

  this.Then(/the bot should return an id of that new ballot/, function(done) {

    if(url = newStory.url) {
      console.log("Passed");
    }
    else {
      console.log("Failed");
    }

    done();
  });

};
