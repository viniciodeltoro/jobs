var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var job = new Schema({
  createdAt: Date,
  userId: String,
  description: String,
  title: String,
  photoUrls: [String],
  maximumWorkTime: String,
  comments: [{ body: String, date: Date, workerId: String}],
  offers: [{ body: String, date: Date, workerId: String, amount: Number, workTime: String],
});

module.exports = mongoose.model('job', job);