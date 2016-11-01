var express = require('express');
var router = express.Router();

var controller = require('./story.controller');

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// console.log(controller);

router.route('/')
// GET all stories
.get(controller.allStories)
// POST a new story
.post(controller.createStory)

router.route('/:id')
// GET a specific story
.get(controller.findById)


module.exports = router;