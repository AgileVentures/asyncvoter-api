var express = require('express');
var router = express.Router();

var Story = require('./story.model')

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


// Define the home page route
router.get('/stories', function(req, res) {
  Story.findAll({}, function(err, stories) {
    res.send(stories);
  })
});


module.exports = router;