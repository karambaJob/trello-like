
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require("path");
const plugins = [
  new HtmlWebpackPlugin({
    template: "./client/src/index.html"
  })
];
const ANALYZE = process.env.ANALYZE;

if (ANALYZE) {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
  entry: "./client/src/index.js",
  output: {
    path: path.join(__dirname, "/client/static"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        loader: ["style-loader", "css-loader", 'less-loader'],
      }
    ]
  },
  devtool: 'source-map',
  plugins,
};