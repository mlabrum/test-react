require('node-jsx').install({extension: '.jsx'});

var path = require('path');
var url = require('url');
var debug = require('debug')('app');
var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');

var router = require('./src/react-router-middleware.jsx')(require('./src/react-routes.jsx'));

var app = module.exports = express();
app.set('port', process.env.port || 3000);

app.use(compression());

// Boot up webpack server
if(app.get('env') == 'development'){
	require('./webpack-dev-server.js');

	app.use('/build', function(request, response){
		response.redirect('http://localhost:3001/build' + request.path);
	});
}

app.use(express.static(path.join(__dirname, 'public')));

// Render react-router routes
app.use('/', router);

app.listen(app.get('port'), function(){
	debug('Express ' + app.get('env') + ' server listening on port ' + this.address().port);
});