"use strict";
let Story = require('./story.model'); 

exports.allStories = function (req, res) {
    Story.findAll({}, function(err, stories) {
        res.send(stories);
    })
}

exports.createStory = function (req, res) {
    var name = req.body.name;
    var size = req.body.size;
    var url = req.body.url;
    // console.log(req)
    // res.send({name: name, size: size, url: url})
    Story.create({name: name, size: size, url: url}, function(err, story) {
        // console.log(req.body)
        res.send(story);
    })
}

