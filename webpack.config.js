const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let name = 'VGLog';

const NODE_ENV = process.env.NODE_ENV || 'development';

if (NODE_ENV === 'production ') {
	module.exports = {
		mode: 'production',
		entry: './index.js',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: name.toLowerCase() + '.min.js',
			library: 'vg'
		},
		optimization: {
			moduleIds: 'named',
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					use: 'babel-loader',
				},
				{
					test: /\.(scss|css)$/,
					use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
				}
			],
		},
		plugins: [
			new webpack.DefinePlugin({
				NODE_ENV: JSON.stringify(NODE_ENV),
				LANG: JSON.stringify('ru'),
			}),
			new MiniCssExtractPlugin({
				filename: name.toLowerCase() + '.min.css',
			}),
		],
		watch: false,
		devtool: 'source-map',
	};
} else if (NODE_ENV === 'development ') {
	module.exports = {
		mode: 'none',
		entry: './index.js',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: name.toLowerCase() + '.js',
			library: 'vg'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					use: 'babel-loader',
				},
				{
					test: /\.(scss|css)$/,
					use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
				}
			],
		},
		plugins: [
			new webpack.DefinePlugin({
				NODE_ENV: JSON.stringify(NODE_ENV),
				LANG: JSON.stringify('ru'),
			}),
			new MiniCssExtractPlugin({
				filename: name.toLowerCase() + '.css',
			}),
		],
		watch: true,
		watchOptions: {
			aggregateTimeout: 100
		},
	}
}
