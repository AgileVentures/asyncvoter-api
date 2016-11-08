"use strict";
var Story = require('./story.model'); 

exports.allStories = function (req, res) {
    console.log("test1");
    let sortParam = req.params["sort"];
    console.log("test2");
    let filterParams = req.params;
    console.log("test3");
    delete filterParams["sort"];
    console.log(filterParams);
    Story.findBy(filterParams, sortParam, function(err, stories) {
        console.log("pirror" + err);
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



