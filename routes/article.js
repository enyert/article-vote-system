'use strict'

var express = require('express');
var router = express.Router();
var Articles = require('../models/articleModel');

/* GET articles listing. */
router.get('/', function(req, res, next) {
  Articles.find(function (err, article) {
    if(err)
      return next(err);
    res.json(article);
  });
});

//Find an article by _id
router.get('/:id', function(req, res, next) {
  Articles.findById(req.params.id, function(err, article) {
    if(err) return next(err);
    res.json(article);
  });
});

/*POST Save article entity */
router.post('/', function(req, res, next) {
  var users = new Articles(req.body);

  users.save(function(err, user) {
    if(err) return next(err);
    res.json(user); //Return after a creation process is useful
  });
});

module.exports = router;
