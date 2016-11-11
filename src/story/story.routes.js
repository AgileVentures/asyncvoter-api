var express = require('express');
var router = express.Router();

var controller = require('./story.controller');
var voteController = require('../vote/vote.controller')

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


router.route('/')
  // GET all stories
  .get(controller.allStories)
  // POST a new story
  .post(controller.createStory)

router.route('/:id')
  // GET a specific story
  .get(controller.findById)

  // POST a specific vote
router.route('/:storyId/votes')
  .post(voteController.castVote);


module.exports = router;
