const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
	mode: mode,

	output: {
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

	plugins: [new MiniCssExtractPlugin()],

	devtool: 'source-map',
	devServer: {
		contentBase: './dist',
		hot: true,
	},
};
