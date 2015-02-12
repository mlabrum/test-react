module.exports = function(grunt) {
	var webpackConfig = require('./src/webpack.config');
	grunt.initConfig({
		webpack: {
			'dist': webpackConfig
		}
	});

	grunt.loadNpmTasks('grunt-webpack')
	grunt.registerTask('build', ['webpack:dist']);

};