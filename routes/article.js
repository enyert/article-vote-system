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
module.exports = router;
