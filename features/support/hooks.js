let Story = require(process.cwd() + '/src/story/story.model');
let Vote = require(process.cwd() + '/src/vote/vote.model');

module.exports = function() {

  this.Before(function (scenario, callback) {

    Story.remove({}, function(err) {
      if (err) {
        callback(err);
      }
      else {
        callback();
      }
    });

    Vote.remove({}, function(err) {
      if (err) {
        callback(err);
      }
      else {
        callback();
      }
    })
  });

}
