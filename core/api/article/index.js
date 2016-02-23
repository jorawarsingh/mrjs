	var express = require('express')
	  , router = express.Router()
	  , Article = require('./articles.js')
	router.use(function(req, res, next) {
		   	console.log("something happend");
		    next();
	});

	router
	.get('/articles',function(req,res){
		Article.find(function(err,articles){
			err && res.send(err);
			res.json(articles)
		})
	})
	.post('/articles',function(req,res){
		var article = new Article();
		article.name = req.body.name;
		article.html = req.body.html;
		article.body = req.body.body;
		article.save(function(err){
			err && res.send(err);
			res.json(article)
		})
	});
	router.get('/articles/:article_id',function(req,res){
		Article.findById(req.params.article_id, function(err, article) {
            if (err)
                res.send(err);
            !article && res.send('no article found')
            res.json(article);
        });
	})
	.put('/articles/:article_id',function(req,res){
		Article.findById(req.params.article_id, function(err, article) {
            if (err)
                res.send(err);
            article.name = req.body.name;
            article.save(function(err){
			err && res.send(err);
			res.json(article)
			})
        });
	})
	.delete('/articles/:article_id',function(req,res){
		Article.remove({
            _id: req.params.article_id
        }, function(err, article) {
            if (err)
                res.send(err);
            res.json({ message: 'Successfully deleted' });
        });
	})

module.exports = router