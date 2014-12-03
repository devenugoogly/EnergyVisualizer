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
	fs.readFile('data/Y1.json', 'utf8', function (err, data) {
	  if (err) 
		  {
		  console.log(err);
		  throw err;
		  }
	  //console.log(data);
	 // obj = JSON.parse(data);
	  //console.log(obj.toString());
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


exports.sectorAnalysis = function(req, res){
	ejs.renderFile('./views/sector.ejs',function(err, result) {
		// render on success
		if (!err) {
			res.end(result);
		}
		// render or error
		else{
			res.end('An error occurred');
		    console.log(err);
		}
	});
};



exports.sectorAnalysisData = function(req, res){
	var obj;
	fs.readFile('data/sectordata.json', 'utf8', function (err, data) {
	  if (err) 
		  {
		  console.log(err);
		  throw err;
		  }
	  //console.log(data);
	  //obj = JSON.parse(data);
	  //console.log(obj.toString());
	  res.write(data);
	  res.end();
	});
};



exports.geo = function(req, res){
	ejs.renderFile('./views/geo.ejs',function(err, result) {
		// render on success
		if (!err) {
			res.end(result);
		}
		// render or error
		else{
			res.end('An error occurred');
		    console.log(err);
		}
	});
};


exports.geoData = function(req, res){
	var obj,year;
	var file;
	console.log(req.body);
	var data = JSON.stringify(req.body);
	year = data[4]+data[5]+data[6]+data[7];
	console.log(year);
	
	file = getFileName(year);
	
	console.log(file);
	fs.readFile(file, 'utf8', function (err, data) {
	  if (err) 
		  {
		  console.log(err);
		  throw err;
		  }

	  res.write(data);
	  res.end();
	});
};

exports.carAnalysis = function(req, res){
	ejs.renderFile('./views/electriccar.ejs',function(err, result) {
		// render on success
		if (!err) {
			res.end(result);
		}
		// render or error
		else{
			res.end('An error occurred');
		    console.log(err);
		}
	});
}


function getFileName(year)
{
	switch(year){
		case '2006':
		{
			return file = 'data/gs2006.json'; 
		}
		break;
		case '2007':
		{
			return file = 'data/gs2007.json'; 
		}
		break;
		case '2008':
		{
			return file = 'data/gs2008.json'; 
		}
		break;
		case '2009':
		{
			return file = 'data/gs2009.json'; 
		}
		break;
		case '2010':
		{
			return file = 'data/gs2010.json'; 
		}
		break;
		case '2011':
		{
			return file = 'data/gs2011.json'; 
		}
		break;
		case '2012':
		{
			return file = 'data/gs2012.json'; 
		}
		break;
	}	

}