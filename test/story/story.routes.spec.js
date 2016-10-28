"use strict";
var request = require('supertest');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);

var mongoose = require('mongoose');
var Story = require('../../src/story/story.model');

var DatabaseCleaner = require('database-cleaner');
var databaseCleaner = new DatabaseCleaner('mongodb');


describe('(Router) Story', function () {

    var server = require('../../bin/server');

    before(function (done) {
        mongoose.connection.on('connected', done);
    });

    beforeEach(function (done) {
        databaseCleaner.clean(mongoose.connections[0].db, function () {
            // console.log('Cleaned successfully');
            var Story = require('../../src/story/story.model');
            Story.create({
                    url: "http://google.com",
                    size: "1",
                    name: "dummy entry"
                },
                function (err, story) {
                    if (err) throw err;
                    done();
                });
        });
    });

    afterEach(function () {
        server.close();
    });


    it('POST /stories', function (done) {
        chai.request(server)
            .post('/stories')
            .send({
                url: 'https://github.com/AgileVentures/AsyncVoter/issues/4',
                size: '3',
                name: 'Start Vote Feature'
            })
            .end(function (err, res) {
                res.should.have.status(200);
                // console.dir("hi!" + JSON.stringify(res.body))
                res.body.url.should.be.eql('https://github.com/AgileVentures/AsyncVoter/issues/4');
                done()
            });
    });

    it('GET /stories', function (done) {
        chai.request(server)
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
            chai.request(server)
                .get('/stories/' + data._id)
                .end(function (err, res) {
                    res.should.have.status(200);
                    console.log("Res body id" + res.body._id);
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
