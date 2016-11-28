let helper = require('./helper');

describe('CORS', function () {
  it('GET /stories should allow cross origin', function(done) {
    helper.request()
          .get('/stories')
          .end(function(err, res) {
            res.should.to.have.header('Access-Control-Allow-Origin');
            done();
    });
  });
  it('GET /stories/:id/votes should allow cross origin', function(done) {
    helper.request()
          .get('/stories/1/votes')
          .end(function(err, res) {
            res.should.to.have.header('Access-Control-Allow-Origin');
            done();
    });
  });
});
