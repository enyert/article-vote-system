var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var articleSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  created: { type: Date, required: true, default: Date.now }
});

module.exports = mongoose.model('articles', articleSchema);
