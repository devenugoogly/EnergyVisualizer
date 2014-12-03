
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/solarpanel', routes.solarpanel);
app.get('/householdanalysis', routes.household);
app.get('/Y1Router',routes.Y1Router)
app.get('/users', user.list);
app.get('/sectorAnalysis', routes.sectorAnalysis);
app.get('/sectorAnalysisData', routes.sectorAnalysisData);
app.get('/about',routes.about);
app.get('/geo',routes.geo);
app.post('/geodata',routes.geoData);
app.get('/electriccar',routes.carAnalysis);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
