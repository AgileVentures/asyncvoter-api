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
    describe ("filter", function() {
      describe("by State", function () {
        it("nothing found", function (done) {
          let result = {
            exec: (func) => func(undefined, []),
            sort: (v) => {return result;} 
          };
          stub.withArgs({size: 0}).returns(result);
          Story.findBy("state=active", undefined, done);
          expect(stub.calledOnce).to.be.true;
        });
        it("found one active", function (done) {
          let expectedResult = [new Story({name: 'story1', size: 0})];
          let result = {
            exec: (func) => func(undefined, expectedResult),
            sort: (v) => {return result;} 
          };
          stub.withArgs({size: 0}).returns(result);
          expect(Story.findBy("state=active", undefined, done)).to.be.eq(expectedResult);
          expect(stub.calledOnce).to.be.true;
        });
      });
    });
    describe ("sort", function() {
      describe("by name", function () {
        it("nothing found", function (done) {
          let result = {
            exec: (func) => func(undefined, []),
            sort: (v) => {return result;} 
          };
          stub.withArgs({}).returns(result);
          expect(Story.findBy("", "name", done)).to.be.eq([]);
          expect(stub.calledOnce).to.be.true;
        });
        it("found two", function (done) {
          let expectedResult = [new Story({name: 'story1', size: 0}), new Story({name: 'story2', size: 1})];
          let result = {
            exec: (func) => func(undefined, [new Story({name: 'story2', size: 1}), new Story({name: 'story1', size: 0})]),
            sort: (v) => {return result;} 
          };
          stub.withArgs({}).returns(result);
          expect(Story.findBy("", "name", done)).to.be.eq(expectedResult);
          expect(stub.calledOnce).to.be.true;
        });
        it("inverse order", function (done) {
          let expectedResult = [new Story({name: 'story2', size: 1}), new Story({name: 'story1', size: 0})];
          let result = {
            exec: (func) => func(undefined, [new Story({name: 'story2', size: 1}), new Story({name: 'story1', size: 0})]),
            sort: (v) => {return result;} 
          };
          stub.withArgs({}).returns(result);
          expect(Story.findBy("", "-name", done)).to.be.eq(expectedResult);
          expect(stub.calledOnce).to.be.true;
        });
      });
      
      describe("sort with multiple", function () {
        it("nothing found", function (done) {
          let result = {
            exec: (func) => func(undefined, []),
            sort: (v) => {return result;} 
          };
          stub.withArgs({}).returns(result);
          expect(Story.findBy("", "name, size", done)).to.be.eq([]);
          expect(stub.calledOnce).to.be.true;
        });
        it("found two", function (done) {
          let expectedResult = [new Story({name: 'story1', size: 0}), new Story({name: 'story2', size: 1})];
          let result = {
            exec: (func) => func(undefined, [new Story({name: 'story2', size: 1}), new Story({name: 'story1', size: 0})]),
            sort: (v) => {return result;} 
          };
          stub.withArgs({}).returns(result);
          expect(Story.findBy("", "name,size", done)).to.be.eq(expectedResult);
          expect(stub.calledOnce).to.be.true;
        });
        it("inverse order", function (done) {
          let expectedResult = [new Story({name: 'story2', size: 1}), 
                                new Story({name: 'story1', size: 0}),
                                new Story({name: 'story1', size: 2})];
          let result = {
            exec: (func) => func(undefined, [new Story({name: 'story1', size: 2}),
                                             new Story({name: 'story2', size: 1}), 
                                             new Story({name: 'story1', size: 0})]),
            sort: (v) => {return result;} 
          };
          stub.withArgs({}).returns(result);
          expect(Story.findBy("", "-name, size", done)).to.be.eq(expectedResult);
          expect(stub.calledOnce).to.be.true;
        });
      });
    });
  });
});
