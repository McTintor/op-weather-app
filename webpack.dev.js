const path = require('path')
const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
	mode: 'development',
	module: {
		rules: [
			{test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
			{test: /\.css$/, use: ['style-loader', 'css-loader']},
		],
	},
	devtool: 'inline-source-map',
	devServer: {
		static: './dist',
		hot: true,
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: 'assets/[name][ext]',
	},
})
