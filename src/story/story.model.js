var mongoose = require('mongoose');
var schema = new mongoose.Schema({
	name: 'string',
	size: 'string',
	url: 'string'
});

schema.statics.findAll = function(predicate, callback) {
	return callback({}, [
		new Story({
			name: "story 1",
			size: '1'
		}),
		new Story({
			name: "Story 2",
			size: '2'
		})
	]);
}

// schema.statics.create = function(obj, callback) {
// 	return callback(null, [obj]);
// }

var Story = mongoose.model('Story', schema);

module.exports = Story;