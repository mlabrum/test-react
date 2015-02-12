'use strict';

var debug = require('debug')('app');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.dev.js');

var webpackServer = new webpackDevServer(webpack(webpackConfig), {
	publicPath: webpackConfig.output.publicPath,
	contentBase: 'http://localhost:3000',
	noInfo: true,
	hot: true,
	headers: {
		"Access-Control-Allow-Origin": "*"
	}
}).listen(3001, 'localhost', function(err, result){
	if(err){
		console.log(err);
	} else{
		debug("Webpack server listening on port 3001");
	}
});