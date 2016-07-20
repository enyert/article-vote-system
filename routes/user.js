var express = require('express');
var router = express.Router();
var Users = require('../models/userModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Users.find(function (err, user) {
    if(err)
      return next(err);
    res.json(user);
  });
});

//Find an user by _id
router.get('/:id', function(req, res, next) {
  Users.findById(req.params.id, function(err, user) {
    if(err) return next(err);
    res.json(user);
  });
});

/*POST Save user entity */
router.post('/', function(req, res, next) {
  var users = new Users(req.body);

  users.save(function(err, user) {
    if(err) return next(err);
    res.json(user); //Return after a creation process is useful
  });
});

module.exports = router;
