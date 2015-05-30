var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var sessionModule = require("../modules/sessions.js");

/* POST, creating new session*/
router.post('/', function(req, res) {
  var credentials = req.body;
  credentials.password = hash(credentials.password);
  sessionModule.verifyUser(credentials.userName, credentials.password, function(err, foundUser) {
    console.log(foundUser);
    if(!err){
      if(foundUser){
        var token = sessionModule.createToken(foundUser.userName);
        sessionModule.createSession(token, foundUser, function (err, newuser) {
          if(!err){
            res.status(200).send({
              userName: credentials.userName,
              token: token
            });
          }
          else res.status(500).send(err);
        });
      }else{
        res.status(401).send();
      }
    }else{
      res.status(500).send(err);
    }
  });
});


var hash = function(password) {
  return crypto.createHash('sha1').update(password).digest('base64')
};

module.exports = router;