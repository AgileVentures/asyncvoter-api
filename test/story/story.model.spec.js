var mongoose = require('mongoose');
var Story = require(process.cwd() + '/src/story/story.model');

var helperFile = require('../helper');
let request = helperFile.request;
let cleanDatabase = helperFile.cleanDatabase;
let sinon = require('sinon');

let chai = require('chai');
let expect = chai.expect;

describe('(Model) Story', function () {
  let stub;
  before(() => {
    stub = sinon.stub(Story, "find");
  });
  after(() => {
    stub.restore();
  });

  describe('#findBy', function () {
    beforeEach(() => {
      stub.reset();
    });
    describe ("filter", function() {
      describe("by State", function () {
        it("no stories present", function (done) {
          let result = {
            exec: (func) => func([]),
            sort: (v) => {return result;} 
          };
          stub.withArgs({size: 0}).returns(result);
          Story.findBy({state: "active"}, function (response) {
            expect(response).to.be.eql([]);
            expect(stub.calledOnce).to.be.true;
            done();
          });
        });
        it("found one active", function (done) {
          let expectedResult = [new Story({name: 'story1', size: 0})];
          let result = {
            exec: (func) => func(expectedResult),
            sort: (v) => {return result;} 
          };
          stub.withArgs({size: 0}).returns(result);
          Story.findBy({state: "active"}, function (response) {
            expect(response).to.be.eql(expectedResult);
            expect(stub.calledOnce).to.be.true;
            done();
          });
        });
        it("nothing found", function (done) {
          let expectedResult = [new Story({name: 'story1', size: 1})];
          let result = {
            exec: (func) => func(expectedResult),
            sort: (v) => {return result;} 
          };
          stub.withArgs({size: 0}).returns(result);
          Story.findBy({state: "active"}, function (response) {
            expect(response).to.be.eql(expectedResult);
            expect(stub.calledOnce).to.be.true;
            done();
          });
        });
        it("only active stories and search for voted", function (done) {
          let expectedResult = [];
          let result = {
            exec: (func) => func(expectedResult),
            sort: (v) => {return result;} 
          };
          stub.withArgs({state: 'voted'}).returns(result);
          Story.findBy({state: "voted"}, function (response) {
            expect(response).to.be.eql(expectedResult);
            expect(stub.calledOnce).to.be.true;
            done();
          });
        });
        it("voted stories and search for it", function (done) {
          let expectedResult = [new Story({name: 'story1', size: 1})];
          let result = {
            exec: (func) => func(expectedResult),
            sort: (v) => {return result;} 
          };
          stub.withArgs({state: 'voted'}).returns(result);
          Story.findBy({state: "voted"}, function (response) {
            expect(response).to.be.eql(expectedResult);
            expect(stub.calledOnce).to.be.true;
            done();
          });
        });
      });
    });
  });
});
