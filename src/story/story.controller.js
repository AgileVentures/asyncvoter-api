"use strict";
var Story = require('./story.model'); 

exports.allStories = function (req, res) {
    Story.findBy(req.query, function(err, stories) {
        res.send(stories);
    })
}

exports.createStory = function (req, res, next) {
    var name = req.body.name;
    var size = req.body.size;
    var url = req.body.url;
    // console.log("Here is the request body: " + JSON.stringify(req.body))
    Story.create({"name": name, "size": size, "url": url}, function(err, story) {
        if (err) throw err;
        // console.log('Story created!');
        var id = story._id;
        res.send(story);
    });
}

exports.findById = function (req, res) {
    var id = req.params.id;
    Story.findOne({'_id':id}, function(err,result) {
        return res.send(result);
    });
}



