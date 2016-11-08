module.exports = function (app) {

  // Route HTTP calls to /stories to the story router
  app.use('/stories', require('./story/story.routes'))

  // Votes NOW are called via a subroute to /stories
  // e.g. /stories/:storyId/votes

  // Route HTTP calls to /votes to the vote router
  // app.use('/votes', require('./vote/vote.routes'))
}
