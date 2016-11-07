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
	if(sort !== undefined) {
		
	}
}


var Story = mongoose.model('Story', schema);



module.exports = Story;