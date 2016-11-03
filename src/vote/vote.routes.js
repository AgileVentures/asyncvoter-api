// votes.routes.js
// Setup the routing for votes
"use strict";

var voteRouter = require('express').Router();
var voteController = require('./vote.controller');

voteRouter.route('/')
  // POST a new vote cast
  .post(voteController.castVote)

module.exports = voteRouter;
