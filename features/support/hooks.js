let Story = require(process.cwd() + '/src/story/story.model');

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
  });

}
