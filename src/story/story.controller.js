"use strict";
//let Story = require('./story.model'); 
var Story = require('./story.model'); 

exports.allStories = function (req, res) {
    Story.find({}, function(err, stories) {
        res.send(stories);
    })
}

exports.createStory = function (req, res,next) {
    var name = req.body.name;
    var size = req.body.size;
    var url = req.body.url;
    console.log("Here is the request body: " + JSON.stringify(req.body))
    Story.create({"name": name, "size": size, "url": url}, function(err, story) {
    if (err) throw err;
           console.log('Story created!');
           var id = story._id;
           res.send(story);
    });
}

