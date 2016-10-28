var express = require('express');
var router = express.Router();

var controller = require('./story.controller');

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// console.log(controller);

// Define the home page route
router.get('/stories', controller.allStories);
router.post('/stories', controller.createStory);
router.get('/stories/:id', controller.findById);


module.exports = router;