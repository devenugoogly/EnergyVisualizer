var ejs = require("ejs");
var fs = require('fs');
/*
 * GET home page.
 */

exports.index = function(req, res){
	ejs.renderFile('./views/index.ejs',function(err, result) {
		// render on success
		if (!err) {
			res.end(result);
		        }
		        // render or error
		        else {
		            res.end('An error occurred');
		            console.log(err);
		        }
		    });
};


//Get solar panel page
exports.solarpanel = function(req,res){
	ejs.renderFile('./views/solarpanel.ejs',function(err, result) {
		// render on success
		if (!err) {
			res.end(result);
		        }
		        // render or error
		        else {
		            res.end('An error occurred');
		            console.log(err);
		        }
		    });
}

//Get household page
exports.household = function(req,res){
	ejs.renderFile('./views/household.ejs',function(err, result) {
		// render on success
		if (!err) {
			res.end(result);
		        }
		        // render or error
		        else {
		            res.end('An error occurred');
		            console.log(err);
		        }
		    });
}

exports.Y1Router = function(req,res){
	var obj;
	fs.readFile('Y1.json', 'utf8', function (err, data) {
	  if (err) 
		  {
		  console.log(err);
		  throw err;
		  }
	  console.log(data);
	  obj = JSON.parse(data);
	  console.log(obj.toString());
	  res.write(data);
	  res.end();
	});
}


exports.about = function(req, res){
	ejs.renderFile('./views/about.ejs',function(err, result) {
		// render on success
		if (!err) {
			res.end(result);
		        }
		        // render or error
		        else {
		            res.end('An error occurred');
		            console.log(err);
		        }
		    });
};