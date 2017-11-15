// vote.controller.js
// vote controller

var Vote = require('./vote.model');

exports.allVotes = function (req, res, next) {
  var storyId = req.params.storyId;

    Vote.find({'story': storyId}, function(err, votes) {
      if (err) return next(err)
      res.send(votes);
    })
}

// Casts a vote
exports.castVote = function (req, res, next) {
  var storyId = req.params.storyId;
  var size = req.body.size;
  var userId = req.body.userId;

  Vote.create({
    story: storyId,
    size: size,
    userId: userId
  }, function (err, theVote) {
    if (err) return next(err)
    res.send(theVote);
  });

};
