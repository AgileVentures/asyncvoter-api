let chai = require('chai');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);

let server = require(process.cwd() + '/bin/server');
let Story = require(process.cwd() + '/src/story/story.model');
let Vote = require(process.cwd() + '/src/vote/vote.model');

var assert = require('chai').assert;

module.exports = function () {
  this.World = require('../support/world').World;

  let story, vote, res;
  let self = this;

  this.Given(/^there is a story with votes$/, function (callback) {
    new Story({'name': 'story'}).save()
    .then((story) => {
      self.story = story;
      return new Vote({'story': story._id, 'size': '3'}).save();
    }).then((vote) => {
      self.vote = vote;
      callback();
    }).catch((err) => {
      throw err;
    });
  });

  this.When(/^the client requests a list of votes$/, function (callback) {
    chai.request(server)
    .get('/stories/' + self.story._id + '/votes')
    .send({'size': '3'})
    .end((err, res) => {
      if (err) throw err;
      self.res = res;
      callback();
    });
  });

  this.Then(/^the response should be a list of votes on that story$/, function (callback) {
    assert.equal(self.res.status, 200);
    assert.isArray(self.res.body);
    assert.equal(self.res.body[0].story, self.story._id);
    assert.equal(self.res.body[0].size, self.vote.size);
    callback();
  });

}
