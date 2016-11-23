module.exports = function (app) {

  // Route HTTP calls to /stories to the story router
  app.use('/stories', require('./story/story.routes'))

  // Route HTTP calls to /stories/:storyId/votes
  app.use('/stories/:storyId/votes', require('./vote/vote.routes'))
}
