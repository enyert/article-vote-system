var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var articleSchema = new Schema({
  id: { type: ObjectId },
  publisher: { type: ObjectId, ref: 'users', required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  upVotes: { type: Number, required: true },
  downVotes: {type: Number, required: true },
  votes: [{
    user: { type: ObjectId, ref: 'users', required: true },
    isApproved: { type: Boolean, required: true }
  }]
});

module.exports = mongoose.model('articles', articleSchema);
