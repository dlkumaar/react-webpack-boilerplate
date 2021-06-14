const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
	mode: mode,

	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
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

	plugins: [new MiniCssExtractPlugin()],

	devtool: 'source-map',
	devServer: {
		contentBase: './dist',
		hot: true,
	},
};
