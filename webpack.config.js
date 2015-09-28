import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CommonsChunkPlugin from 'webpack/lib/optimize/CommonsChunkPlugin';
import _ from 'lodash';

var env = process.env.NODE_ENV;

var exports = {
	entry: {
		main: ['./src/components/App.jsx'],
		lib: [
			'./src/BindReact.jsx',
			"react",
			"react-router",
			"lodash",
			"jquery",
			"bootstrap/dist/js/bootstrap.js",
			"./src/shared/css/global.less"
		]
	},
	output: {
		path: path.join(__dirname, 'public', 'bundles'),
		filename: '[name].js',
		publicPath: '/public/bundles/'
	},
	module: {
		loaders: [
			{ test: /\.less|\.css/, loader: env != 'development' ? ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader') : "style-loader!css-loader!less-loader" },
			{ test: /\.jsx?/, loaders: env != 'development' ? ['babel-loader?stage=1'] : ['react-hot-loader', 'babel-loader?stage=1'], exclude: /node_modules/ },
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
		]
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.ProvidePlugin({
			fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
			$: "jquery",
			jQuery: "jquery"
		}),
		new CommonsChunkPlugin({
			name: "lib",
			filename: "lib.js",
			minChunks: 2
		}),
		new webpack.DefinePlugin({
			"process.env": {
				BROWSER: JSON.stringify(true)
			}
		})
	]
};

console.log("Webpack in " + env + " mode");

if (env != 'development') {
	exports.plugins = exports.plugins.concat([
		new webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify('production')
			}
		}),
		new ExtractTextPlugin("[name].css", {
			allChunks: true
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: { warnings: false }
		})
	]);

} else {
	exports.devtool = "source-map";

	for (let name in exports.entry) {
		if (name != 'lib') {
			exports.entry[name].push('webpack-hot-middleware/client');
			exports.entry[name].push('webpack/hot/dev-server');
		}
	}

	exports.plugins = [new webpack.HotModuleReplacementPlugin()].concat(exports.plugins);
}

module.exports = exports;
