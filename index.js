require('babel/register')();

delete process.env.BROWSER;

require('dotenv').load();

var express = require('express');

var env = process.env.NODE_ENV;
var app = express();

console.log('Node server: ', process.env.UI_BASE_ADDRESS + ":" + process.env.UI_PORT);

app.use('/public', express.static('public'));


// If running in development, use webpack middleware to serve code
if (env === 'development') {
	var webpackConfig = require('./webpack.config.js');
	var compiler = require('webpack')(webpackConfig);
	var webpackDev = require('webpack-dev-middleware')(compiler, {
		publicPath: webpackConfig.output.publicPath,
		stats: { colors: true }
	});
	app.use(webpackDev);
	app.use(require('webpack-hot-middleware')(compiler));
}

app.use(require('./server/middleware/react-router-middleware.jsx')(require("./src/Routes.jsx")));

var server = app.listen(process.env.UI_PORT, '0.0.0.0', function () {
	console.log('Node Server listening at http://%s:%s', server.address().address, server.address().port);
});

module.exports = {
	app: app,
	stop: function () {
		if (webpackDev) {
			webpackDev.close(function () {
				server.close();
			});
		} else {
			server.close();
		}
	}
};
