// vote.controller.js
// vote controller

var Vote = require('./vote.model');

exports.allVotes = function (req, res) {
  var storyId = req.params.storyId;

    Vote.find({'story': storyId}, function(err, votes) {
      if (err) throw err;
      res.send(votes);
    })
}

// Casts a vote
exports.castVote = function (req, res, next) {

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
