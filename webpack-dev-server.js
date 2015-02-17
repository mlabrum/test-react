var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');
var debug = require('debug')('app');

var webpackServer = new webpackDevServer(webpack(webpackConfig), {
	publicPath: webpackConfig.output.publicPath,
	contentBase: 'http://localhost:3000',
	noInfo: true,
	hot: true,
	headers: {
		"Access-Control-Allow-Origin": "*"
	}
}).listen(3001, 'localhost', function(err, result){
		err ? console.log(err) : debug("Webpack server listening on port 3001");
});