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
          Story.findBy({state: "active"}, done);
          expect(stub.calledOnce).to.be.true;
        });
        it("found one active", function (done) {
          let expectedResult = [new Story({name: 'story1', size: 0})];
          let result = {
            exec: (func) => func(undefined, expectedResult),
            sort: (v) => {return result;} 
          };
          stub.withArgs({size: 0}).returns(result);
          expect(Story.findBy({state: "active"}, done)).to.be.eq(expectedResult);
          expect(stub.calledOnce).to.be.true;
        });
      });
    });
  });
});
