var user = require('../models/user');
var sessions = require('../models/sessions');
var jwt = require('jsonwebtoken');
var jwtSecret = 'hhbf884hj4/443';

var exports = module.exports = {};
         
exports.createToken = function(userName) {
  var token = jwt.sign({
    userName: userName
  }, jwtSecret, {expiresInMinutes: '120'});
  return token;
};

exports.decodeToken = function(token) {
  return jwt.verify(token, jwtSecret);
};

exports.createSession = function(token, userObject, callback) {
  var session = {
    createdAt: new Date(),
    token: token,
    userName: userObject.userName,
    userId: userObject._id,
  };

  var newSession = new sessions(session);
  newSession.save(function (err, newuser) {
    callback(err, newuser);
  });
};

exports.verifyUser = function(userName, password, callback) {
  user.find({ userName: userName}, function(err, foundUsers) {
    if(!err){
      if(foundUsers.length > 0){
        if(foundUsers[0].password === password){
          callback(err, foundUsers[0]);
        }
      }else{
        callback(err, false);
      }
    }else{
      callback(true, err);
    }
  });
};