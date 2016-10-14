"use strict";
let Story = require('./story.model'); 

exports.allStories = function (req, res) {
    Story.findAll({}, function(err, stories) {
        res.send(stories);
    })
}

