var mongoose = require('mongoose');
var Story = require(process.cwd() + '/src/story/story.model');

var helperFile = require('../helper');
let request = helperFile.request;
let cleanDatabase = helperFile.cleanDatabase;

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
        name: 'Start Vote Feature'
      })
      .end(function (err, res) {
        res.should.have.status(200);
        res.body.url.should.be.eql('https: //github.com/AgileVentures/AsyncVoter/issues/4');
done()

      });
  });

  it('GET /stories', function (done) {
    request()
      .get('/stories')
      .end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(1);
        done()
      });
  });

  it('GET /stories/:id', function (done) {
    var newStory = new Story({
      url: 'https://github.com/AgileVentures/AsyncVoter/issues/5',
      size: '1',
      name: 'Receive Vote Feature'
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
          done();
        });
    });
  });
});
