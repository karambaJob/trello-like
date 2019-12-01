const commonConfig = require('./webpack.common.config');

commonConfig.optimization = {
  splitChunks: {
    chunks: 'all',
    minChunks: 1,
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10
      },
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true
      }
    }
  }
};

module.exports = commonConfig;