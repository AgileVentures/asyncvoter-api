var mongoose = require('mongoose');
var schema = new mongoose.Schema({
	name: 'string',
	size: 'string',
	url: 'string'
},
{
    timestamps: true
});

schema.statics.findBy = function(filter, callback) {
	let filterObject = {};
	if(filter['state'] && filter['state'] === 'active') {
		filterObject['size'] = 0;
	} 
	return this.model('Story').find(filterObject).sort('name').exec(callback);
}


var Story = mongoose.model('Story', schema);



module.exports = Story;