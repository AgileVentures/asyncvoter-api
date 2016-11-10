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
  // .all(votesRouter)
  // TODO: Handle this here, or pass to the votes router??????
  .post(function (req, res, next) {

    var storyId = req.params.storyId;
    var size = req.body.size;

    if (!storyId) {
      console.log('The story I is missing');
      var err = new Error("story id missing");
      err.status = 412;
      return next(err);
    }

    if (!size) {
      console.log('The size is missing');
      var err = new Error("size missing");
      err.status = 412;
      return next(err);
    }

    voteController.castVote(storyId, size,
      function (err, theVote) {
        // TODO: Error handling code
        if (err)
          return next(err);

        res.send(theVote);
      }
    );

  });



module.exports = router;
