// votes.routes.js
// Setup the routing for votes
"use strict";

var voteRouter = require('express').Router();
var voteController = require('./vote.controller');

voteRouter.route('/')
  // POST a new vote cast
  .post(function (req, res, next) {

    var issue = req.body.issue;
    var developer = req.body.developer;
    var vote = req.body.vote;
    var notes = req.body.notes;

    voteController.castVote(issue, developer, vote, notes, function (err, theVote) {
      // TODO: Error handling code
      if (err) return next(err);

      res.send(theVote);
    });
  });


module.exports = voteRouter;
