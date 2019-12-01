const commonConfig = require('./webpack.common.config');
const path = require("path");

const devServer = {
  contentBase: path.join(__dirname, '/client/static'),
  compress: true,
  port: 9000
};

commonConfig.devServer = devServer;

module.exports = commonConfig;