// votes.routes.js
// Setup the routing for votes
"use strict";

var voteRouter = require('express').Router();
var voteController = require('./vote.controller');

voteRouter.route('/')
  // POST a new vote cast
  .post(function (req, res, next) {
    // var
    // voteController.castVote
    next();
  });


module.exports = voteRouter;
