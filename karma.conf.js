// Karma configuration

var webpackConfig = require('./webpack.test');

var ENV = process.env.npm_lifecycle_event;
var isTestWatch = ENV === 'test-w';

module.exports = function(config) {
  var _config = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        { pattern: './karma-test-shim.js', watched: false }
    ],


    // list of files to exclude
    exclude: [
    ],


    webpack: webpackConfig,
    webpackMiddleware: {
        stats: 'errors-only'
    },
    
    webpackServer: {
        noInfo: true
    },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        './karma-test-shim.js': ['webpack', 'sourcemap']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  };

  if (!isTestWatch) {
        
        _config.reporters.push("coverage");

        _config.coverageReporter = {
            dir: 'coverage/',
            reporters: [{
                type: 'json',
                dir: 'coverage',
                subdir: 'json',
                file: 'coverage-final.json'
            }]
        };
    }

    config.set(_config);
}
