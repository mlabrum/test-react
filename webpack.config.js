var webpack = require('webpack');
var extractTextPlugin = require('extract-text-webpack-plugin');
var _ = require('underscore');

var exports = {
	entry: {
		lib: [
			'react',
			'react-router',
			'jquery',
			'debug',
			'react-document-title',
			'bootstrap/dist/js/bootstrap.js'
		],
		main: ['./src/client.jsx']
	},

	output: {
		path: './public/build/',
		publicPath: '/build/',
		filename: 'main.js'
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin('lib', 'lib.js'),
		new webpack.ProvidePlugin({
			jQuery: "jquery",
			$: "jquery"
		})
	],

	module: {
		loaders: [
			{ test: /\.jsx$/, loaders: ['react-hot', 'jsx-loader'] },

			{ test: /\.less$/, loader: process.env.NODE_ENV == 'production' ? extractTextPlugin.extract('style-loader', 'css-loader!less-loader') : "style-loader!css-loader!less-loader" },

			// **IMPORTANT** This is needed so that each bootstrap js file required by
			// bootstrap-webpack has access to the jQuery object
			{ test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },

			// loads bootstrap's font files.
			{ test: /\.woff$/,   loader: "url?limit=10000&minetype=application/font-woff" },
			{ test: /\.woff2$/,   loader: "url?limit=10000&minetype=application/font-woff2" },
			{ test: /\.ttf$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
			{ test: /\.eot$/,    loader: "file" },
			{ test: /\.svg$/,    loader: "url?limit=10000&minetype=image/svg+xml" }
		]
	}
};


// Configure the file for either development or production webpack.
if(process.env.NODE_ENV == 'production'){
	exports.plugins = exports.plugins.concat([
		new webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify('production')
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new extractTextPlugin("main.css", {
			allChunks: true
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {warnings: false}
		})
	]);

}else{

	exports.devtool = "#inline-source-map";
	exports.entry = [
		'webpack-dev-server/client?http://localhost:3001',
		'webpack/hot/dev-server'
	].concat(_.chain(exports.entry).map(_.values).flatten().value());

	exports.plugins = [new webpack.HotModuleReplacementPlugin()].concat(exports.plugins);

	exports.output.path = __dirname;
	exports.output.publicPath = 'http://localhost:3001/build/';
}

module.exports = exports;