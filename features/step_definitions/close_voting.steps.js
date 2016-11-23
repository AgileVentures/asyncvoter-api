////////////////////////////////////
// closing_voting.js
//
// Tests for user closing voting

var assert = require('chai').assert;

module.exports = function () {
  this.World = require('../support/world').World;

    this.Given(/^there is a story with name "([^"]*)" and URL of "([^"]*)"$/, function (name, url, callback) {
    var $this = this;

    this.setupStory(name, url,
      function () {
        assert($this.response.status >= 200 && $this.response.status < 300,
          "Setting up story - response from server was bad - "
          + $this.response.status);
        callback();
      });
    });
    
    /**
     * PUT /stories/:id { size: "x" } 
     */
     
    this.When(/^I send the story a size of (\d+)$/, function (size, callback) {
        
        var $this = this;
        this.closeVoting(this.storyId, size, function (err, res) {
            assert.isNull(err);
            assert.isNotNull(res);
            assert(res.status >= 200 && res.status < 300, "PUT failed!");
            $this.response = res;
             
            // last step! callback to the framework
            callback();
        });
        
    });
    
    this.Then(/^I should get the story back with size (\d+)$/, function (size, callback) {
        var responseSize = this.response.body.size;
        assert.equal(responseSize, size,
        "Size of story in response is not what was sent - responseSize: " + responseSize + ", expected size: " + size);
        callback();
    });
}
