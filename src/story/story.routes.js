var express = require('express');
var router = express.Router();

var controller = require('./story.controller');

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

// TODO: Please move to the votes controller/routing files ?
var voteController = require('../vote/vote.controller')
router.route('/:storyId/votes')
  // TODO: Handle this here, or pass to the votes router??????
  .post(voteController.castVote)

module.exports = router;
