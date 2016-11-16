// vote.controller.js
// vote controller

var Vote = require('./vote.model');

// Casts a vote
exports.castVote = function (req, res, next) {
console.log(req.params, req.body)
  var storyId = req.params.storyId;
  var size = req.body.size;

  Vote.create({
    story: storyId,
    size: size
  }, function (err, theVote) {
    if (err) return next(err)
    res.send(theVote);
  });

};
