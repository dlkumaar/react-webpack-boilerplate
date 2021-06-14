const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
	mode: mode,

	output: {
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: 'images/[hash][ext][query]',
	},
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.s?css$/i,
				use: [
					{ loader: MiniCssExtractPlugin.loader, options: { publicPath: '' } },
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},

	resolve: {
		extensions: ['.js', '.jsx'],
	},

	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],

	devtool: 'source-map',
	devServer: {
		contentBase: './dist',
		hot: true,
	},
};
