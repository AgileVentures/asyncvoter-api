// vote.model.js
// DB model of a vote

var mongoose = require('mongoose');
var voteSchema = new mongoose.Schema({
  story: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Story',
    required: true
  },
  size: {
    type: String,
    required: true
  },
  userId: String
},{
    timestamps: true
});

var Vote = mongoose.model('Vote', voteSchema);

module.exports = Vote;
