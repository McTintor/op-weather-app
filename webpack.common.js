const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/app.js',
    vendor: './src/vendor.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html'
    }),
  ],
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      }
    ]
  }
};