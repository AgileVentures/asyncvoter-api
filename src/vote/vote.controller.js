// vote.controller.js
// vote controller

var votes = require('./vote.model');

// Casts a vote
exports.castVote = function (issue, developer, vote, callback) {
  var theVote;
  var err;
  callback(err, theVote);
}
