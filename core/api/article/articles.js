var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var Article   = new Schema({
	title:String,
    html: String,
    body: String,
    date: { type: Date, default: Date.now },
    category:String,
    arthur:String
});
module.exports = mongoose.model('Article', Article);

