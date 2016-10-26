"use strict";
//let Story = require('./story.model'); 
var Story = require('./story.model'); 

exports.allStories = function (req, res) {
    Story.findAll({}, function(err, stories) {
        res.send(stories);
    })
}

exports.createStory = function (req, res) {
    var name = req.body.name;
    var size = req.body.size;
    var url = req.body.url;
    Story.create({name: name, size: size, url: url}, function(err, story) {
        if (err) {
            console.log("Error! " + err);
            return err;
        }

        res.send(story);
    })
}

