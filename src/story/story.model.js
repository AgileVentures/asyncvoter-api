var mongoose = require('mongoose');
var schema = new mongoose.Schema({
	name: 'string',
	size: 'string',
	url: 'string'
});

var Story = mongoose.model('Story', schema);

module.exports = Story;