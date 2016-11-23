var express = require('express');
var router = express.Router();

var controller = require('./story.controller');

router.route('/')
  // GET all stories
  .get(controller.allStories)
  // POST a new story
  .post(controller.createStory)

router.route('/:id')
  // GET a specific story
  .get(controller.findById)
  // PUT a size - close votes
  .put(controller.closeVoting)

module.exports = router;
