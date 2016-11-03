// vote.controller.js
// vote controller

var Vote = require('./vote.model');

// Casts a vote
exports.castVote = function (issue, developer, vote, notes, callback) {

  Vote.create({
    issue: issue,
    developer: developer,
    vote: vote,
    notes: notes
  }, function (err, theVote) {
    callback(err, theVote);
  });

};
