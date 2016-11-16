var express = require('express');
var router = express.Router({mergeParams: true});

var controller = require('./vote.controller');

router.route('/')
  // POST a specific vote
  .post(controller.castVote)

module.exports = router;
