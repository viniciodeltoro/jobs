var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sessions = new Schema({
  createdAt: { type: Date, expires: '2h' },
  token: String,
  userName: String,
  userId: String,
});

module.exports = mongoose.model('sessions', sessions);