var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:3001',
		'webpack/hot/dev-server',
		'./src/client.jsx',
		'jquery',
		'bootstrap/dist/js/bootstrap.js'
	],

	output: {
		path: __dirname,
		filename: 'main.js',
		publicPath: 'http://localhost:3001/build/'
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.CommonsChunkPlugin('lib', 'lib.js'),
		new webpack.ProvidePlugin({
			jQuery: "jquery",
			$: "jquery"
		})
	],

	module: {
		loaders: [
			{ test: /\.jsx$/, loaders: ['react-hot', 'jsx-loader'] },
			{ test: /\.less$/, loader: "style-loader!css-loader!less-loader" },

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
	},

	devtool: "#inline-source-map"
}