var express = require('express')
var fs = require('fs')
var app = express();
var bodyParser = require('body-parser');
var Article = require('./core/api/article')
var mongoose   = require('mongoose');
var bs = require("browser-sync").create();
mongoose.connect('mongodb://@localhost:3030/mrjs');

	app.use(express.static(__dirname + '/'));

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());


   app.use('/api',Article)
	//app.use('/api', router);

	app.listen(3000, function () {
	  console.log('Example app listening on port 3000!');
	});
	//TODO find better solution to reload or reload just that potion is changed
	/*bs.init({
	    proxy: "localhost:3000",
	    serveStatic: [__dirname +'/dist'],
	    files:['./public/**///*.*']
	//});
	//bs.reload("*.html");*/