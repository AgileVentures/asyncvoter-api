// vote.model.js
// DB model of a vote

var mongoose = require('mongoose');
var voteSchema = new mongoose.Schema({
  issue: {
    type: String,
    required: true
  },
  developer: {
    type: String,
    required: true
  },
  vote: {
    type: String,
    required: true
  }
});

var Vote = mongoose.model('Vote', voteSchema);

module.exports = Vote;
