var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model('users', userSchema);
