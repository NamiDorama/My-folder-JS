const path = require('path');
const webpackConfig = require('./webpack.config.test');

module.exports = function (config) {
	config.set({

		basePath: '',

		frameworks: ['mocha'],

		files: [
			'src/**/*spec.js',
			'src/*spec.js'
		],

		exclude: [],

		preprocessors: {
			'src/**/*.js': ['webpack'],
			'src/*.js': ['webpack']
		},

		reporters: ['mocha'],

		port: 9876,

		colors: true,

		logLevel: config.LOG_INFO,

		autoWatch: true,

		browsers: ["Chrome-headless"],

		customLaunchers: {
			"Chrome-headless": {
				base: 'Chrome',
				flags: ['--headless', '--remote-debugging-port=9222', '--no-sandbox']
			}
		},

		singleRun: false,

		concurrency: Infinity,

		plugins: [
			'karma-mocha',
			'karma-chrome-launcher',
			'karma-webpack',
			'karma-mocha-reporter'
		],

		webpack: webpackConfig
	})
};