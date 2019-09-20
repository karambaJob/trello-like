const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./client/src/index.js",
  output: {
    path: path.join(__dirname, "/client/static"),
    filename: "index_bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, '/client/static'),
    compress: true,
    port: 9000
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
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/src/index.html"
    })
  ]
};