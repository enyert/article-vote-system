'use strict'

var express = require('express'),
	router = express.Router(),
	Articles = require('../models/articleModel');

//Find an article by _id
router.get('/:id', function(req, res, next) {
	Articles.findById(req.params.id, function(err, article) {
		if(err) return next(err);
		res.json(article);
	});
});

/*POST Save vote in article entity */
router.patch('/', function(req, res, next) {
	Articles.findById(req.body.articleId, function(err, article) {
		if(err) return next(err);
		if(article === null) res.sendStatus(404);

		if(req.body.isApproved === true){
			article.upVotes = article.upVotes + 1;
		} else if(req.body.isApproved === false){
			article.downVotes = article.downVotes + 1;
		}
		article.votes.push({
			user: req.body.user,
			isApproved: req.body.isApproved
		});

		article.save(function(err, art) {
			if(err) return next (err);
			res.json(art);
		});
	});
});

module.exports = router;
