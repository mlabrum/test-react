var webpack = require('webpack');
var extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
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
		new webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify('production')
			}
		}),
		new webpack.optimize.CommonsChunkPlugin('lib', 'lib.js'),
		new webpack.optimize.DedupePlugin(),
		new extractTextPlugin("main.css", {
			allChunks: true
		}),
		new webpack.ProvidePlugin({
			jQuery: "jquery",
			$: "jquery"
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {warnings: false}
		})
	],

	module: {
		loaders: [
			{test: /bootstrap\/dist\/js\//, loader: 'imports?jQuery=jquery'},
			{ test: /\.jsx$/, loaders: ['react-hot', 'jsx-loader'] },
			{ test: /\.less$/, loader: extractTextPlugin.extract('style-loader', 'css-loader!less-loader') },

			// loads bootstrap's font files.
			{ test: /\.woff$/,   loader: "url?limit=10000&minetype=application/font-woff" },
			{ test: /\.woff2$/,   loader: "url?limit=10000&minetype=application/font-woff2" },
			{ test: /\.ttf$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
			{ test: /\.eot$/,    loader: "file" },
			{ test: /\.svg$/,    loader: "url?limit=10000&minetype=image/svg+xml" }
		]
	}



}