// vote.controller.js
// vote controller

var Vote = require('./vote.model');

// Casts a vote
exports.castVote = function (req, res, next) {
  var storyId = req.params.storyId;
  var size = req.body.size;

  if (!storyId) {
    var err = new Error("story id missing");
    err.status = 400;
    return next(err);
  }

  if (!size) {
    var err = new Error("size missing");
    err.status = 400;
    return next(err);
  }

  Vote.create({
    story: storyId,
    size: size
  }, function (err, theVote) {
    if (err)
      return next(err);

    res.send(theVote);
  });

};
