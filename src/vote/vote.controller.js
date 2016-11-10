// vote.controller.js
// vote controller

var Vote = require('./vote.model');

// Casts a vote
exports.castVote = function (storyId, size, callback) {
  Vote.create({
    story: storyId,
    size: size
  }, function (err, theVote) {
    callback(err, theVote);
  });

};
