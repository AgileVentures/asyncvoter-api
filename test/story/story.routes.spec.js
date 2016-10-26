"use strict";
var request = require('supertest');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);
describe('(Router) Story', function () {
    var server;
    beforeEach(function() {
        server = require('../../bin/server');
    });
    afterEach(function () {
        server.close();
    });
    it('GET /stories', function (done) {
        chai.request(server)
            .get('/stories')
            .end( (err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(2);
                done()
            });
    });
    it('POST /stories', function (done) {
        chai.request(server)
            .post('/stories')
            .field('url', 'https://github.com/AgileVentures/AsyncVoter/issues/4')
            .field('size', '3')
            .field('name', 'Start Vote Feature')
            .end( (err, res) => {
                res.should.have.status(200);
                res.body.length.should.be.eql(1);
                done()
            });
    });

})