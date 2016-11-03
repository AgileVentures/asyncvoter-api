module.exports = function (app) {

  // Route HTTP calls to /stories to the story router
  app.use('/stories', require('./story/story.routes'))

  // Route HTTP calls to /votes to the vote router
  app.use('/votes', require('./vote/vote.routes'))
}
