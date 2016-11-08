var mongoose = require('mongoose');
var schema = new mongoose.Schema({
	name: 'string',
	size: 'string',
	url: 'string'
},
{
    timestamps: true
});

schema.statics.findAllActive = function(cb) {
  return this.model('Story').find({size: 0}).sort('name').exec(cb);
};
schema.statics.findBy = function(filter, sort, callback) {
	sortArray = [];
	if(sort !== undefined) {
		sort.split(',').forEach((sortOrder) => {
			let sortOrderTrimmed = sortOrder.trim();
			if(sortOrderTrimmed[0] === '-') {
				sortArray.push([sortOrderTrimmed.substr(1, sortOrderTrimmed.length - 1), -1]);
			} else {
				sortArray.push(sortOrderTrimmed)
			}
		});
	}
	let filterObject = {};
	if(filter !== undefined) {
		filter.split(',').forEach((filterPair) => {
			let filterPairSplit = filterPair.split('=');
			if(filterPairSplit[0] === 'state') {
				filterObject['size'] = 0;
			}
		});
	}
	return this.model('Story').find(filterObject).sort('name').exec(callback);
}


var Story = mongoose.model('Story', schema);



module.exports = Story;