// vote.controller.js
// vote controller

var Vote = require('./vote.model');

// Casts a vote
exports.castVote = function (issue, developer, vote, callback) {

  Vote.create({
    issue: issue,
    developer: developer,
    vote: vote
  }, function (err, theVote) {
    callback(err, theVote);
  });

};
