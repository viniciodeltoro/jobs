var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var user = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res) {
  user.find(function (err, users) {
    if(!err) res.send(users);
    else res.status(500).send(err);
  });
});

/* POST, creating new user*/
router.post('/', function(req, res) {
  var userToSave = req.body;
  userToSave.password = hash(userToSave.password)
  var newUser = new user(userToSave);
  newUser.save(function (err, newuser) {
    if(!err) res.send(newuser);
    else res.status(500).send(err);
  });
});

/* DELETE, deleting a user*/
router.delete('/:id', function(req, res) {
  console.log('the user id: ' + req.params.id);
  user.findById(req.params.id, function(err, foundUser) {
    foundUser.remove( function(err) {
      if(!err){
        res.status(200);
      }else{
        res.status(500).send(err);
      }
    });
  });
});

hash = function(password) {
  return crypto.createHash('sha1').update(password).digest('base64')
}

module.exports = router;
