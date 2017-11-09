var mongoose = require('mongoose');
var Story = require(process.cwd() + '/src/story/story.model');

var helperFile = require('../helper');
let request = helperFile.request;
let cleanDatabase = helperFile.cleanDatabase;
let expect = require('chai').expect

describe('(Router) Story', function () {
  beforeEach(function (done) {
    cleanDatabase(function () {
      Story.create({
          url: "http://google.com",
          size: "1",
          name: "dummy entry"
        },
        function (err, story) {
          if (err) throw err;
          done();
        }
      );
    });
  });

  it('POST /stories', function (done) {
    request()
      .post('/stories')
      .send({
        url: 'https://github.com/AgileVentures/AsyncVoter/issues/4',
        size: '3',
        name: 'Start Vote Feature',
        source: 'https://agileventures.slack.com/messages/C0KK907B5/',
        userId: 'slack_user'
      })
      .end(function (err, res) {
        res.should.have.status(200);
        res.body.url.should.be.eql('https://github.com/AgileVentures/AsyncVoter/issues/4');
        res.body.source.should.be.eql('https://agileventures.slack.com/messages/C0KK907B5/');
        res.body.userId.should.be.eql('slack_user');
        done()
      });
  });

  describe('GET /stories', function() {
    beforeEach(function(done) {
      Story.create({
          url: "http://google.com/url1",
          size: "0",
          name: "test",
          userId: 'slack_user'
        },
        function (err, story) {
          if (err) throw err;
          done();
        }
      );
    });
    it('retrieve all stories', function (done) {
      request()
        .get('/stories')
        .end(function (err, res) {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(2);
          done()
        });
    });
    it('retrieve active story', function (done) {
      request()
        .get('/stories/')
        .query({state: 'active'})
        .end(function (err, res) {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eq(1);
          expect(res.body[0].name).to.be.eq("test");
          res.body[0].userId.should.be.eql('slack_user');
          done()
        });
    });
  });

  it('GET /stories/:id', function (done) {
    var newStory = new Story({
      url: 'https://github.com/AgileVentures/AsyncVoter/issues/5',
      size: '1',
      name: 'Receive Vote Feature',
      userId: 'slack_user'
    });
    newStory.save(function (err, data) {
      request()
        .get('/stories/' + data._id)
        .end(function (err, res) {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('name');
          res.body.should.have.property('url');
          res.body.should.have.property('size');
          res.body.should.have.property('_id').eql(res.body._id);
          res.body.userId.should.be.eql('slack_user');
          done();
        });
    });
  });
});
