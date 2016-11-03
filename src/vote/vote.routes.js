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


    if (!issue) {
      var err = new Error("issue missing");
      err.status = 412;
      return next(err);
    }

    if (!developer) {
      var err = new Error("developer missing");
      err.status = 412;
      return next(err);
    }

    if (!vote) {
      var err = new Error("vote missing");
      err.status = 412;
      return next(err);
    }

    voteController.castVote(issue, developer, vote, notes, function (err, theVote) {
      // TODO: Error handling code
      if (err)
        return next(err);

      res.send(theVote);
    });
  });


module.exports = voteRouter;
