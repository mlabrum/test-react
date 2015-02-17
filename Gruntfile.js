process.env.NODE_ENV = 'production';

module.exports = function(grunt) {
	var webpackConfig = require('./webpack.config.js');
	grunt.initConfig({
		webpack: {
			'dist': webpackConfig
		}
	});

	grunt.loadNpmTasks('grunt-webpack')
	grunt.registerTask('build', ['webpack:dist']);

};