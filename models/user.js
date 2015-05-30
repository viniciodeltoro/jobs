var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
  fullName: String,
  userName: String,
  password: String,
  email: String,
  phoneNumber: String
});

module.exports = mongoose.model('user', user);