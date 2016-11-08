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

    var issue = req.params.storyId;

    var developer = req.body.developer;
    var vote = req.body.vote;
    var notes = req.body.notes;


    if (!issue) {
      console.log('The issue is missing');
      var err = new Error("issue missing");
      err.status = 412;
      return next(err);
    }

    if (!developer) {
      console.log('The developer is missing');
      var err = new Error("developer missing");
      err.status = 412;
      return next(err);
    }

    if (!vote) {
      console.log('The vote is missing');
      var err = new Error("vote missing");
      err.status = 412;
      return next(err);
    }

    voteController.castVote(issue, developer, vote, notes,
      function (err, theVote) {
        // TODO: Error handling code
        if (err)
          return next(err);

        res.send(theVote);
      }
    );

  });



module.exports = router;
