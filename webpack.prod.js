const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(), new TerserPlugin()
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  devtool: 'source-map',
  output: {
    filename: "[name].[contenthash].bundle.js", 
    path: path.resolve(__dirname, "dist"), 
    assetModuleFilename: "assets/[name].[hash][ext]",
  },
});