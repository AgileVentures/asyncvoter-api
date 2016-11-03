// vote.controller.js
// vote controller

var votes = require('./vote.model');

// Casts a vote
exports.castVote = function (issue, developer, vote, callback) {
  var theVote = {
    issue: issue,
    developer: developer,
    vote: vote
  };
  var err;
  callback(err, theVote);
}
