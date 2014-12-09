var express = require('express');
var router = express.Router();

var user = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res) {
  user.find(function (err, users) {
    if(!err) res.send(users);
    else console.log('error: ' + err);
  });
});

/* POST, creating new user*/
router.post('/', function(req, res) {
  console.log(req.body);
  var newUser = new user(req.body);
  newUser.save(function (err, newuser) {
    if(!err) res.send(newuser);
    else console.log('error: ' + err);
  });
});

/* DELETE, deleting a user*/
router.delete('/:id', function(req, res) {
  console.log('the user id: ' + req.params.id);
  user.findById(req.params.id, function(err, foundUser) {
    foundUser.remove( function(err) {
      if(!err) console.log('User deleted');
      else console.log('error: ' + err);
    });
  });
});

module.exports = router;
