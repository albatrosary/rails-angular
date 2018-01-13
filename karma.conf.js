const webpackConfig = require('./config/webpack/test.js')
module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["jquery-3.2.1", "jasmine-jquery", "jasmine"],
    plugins: [
      "karma-jquery",
      "karma-jasmine-jquery",
      "karma-jasmine",
      "karma-webpack",
      "karma-chrome-launcher"
    ],
    files: [ "/* add spec files */" ],
    exclude: [],
    webpack: webpackConfig,
    preprocessors: {"/* add spec files */" : ["webpack"]},
    mime: { "text/x-typescript": ["ts"] },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome"],
    singleRun: true
  });
};
