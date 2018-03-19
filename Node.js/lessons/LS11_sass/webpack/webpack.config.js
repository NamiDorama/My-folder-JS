const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const args = require('yargs').argv;

const plugins = [
	new HtmlWebpackPlugin({
		title: 'Mega project',
		template: 'index.html'
	}),

	new webpack.HotModuleReplacementPlugin()
];

let styleLoaders = [
	{loader: 'style-loader'},
	{loader: "css-loader"},
	{loader: "sass-loader"}
];

if (args.env && (args.env.styles || args.env.hash)) {
	styleLoaders = ExtractTextPlugin.extract({
		fallback: "style-loader",
		use: [
			{loader: 'css-loader'},
			{loader: 'sass-loader'}
		]
	});

	args.env.styles ?
		plugins.push(new ExtractTextPlugin('style.css')) :
		plugins.push(new ExtractTextPlugin('style-[contenthash].css'));
}


module.exports = {
	entry: './app.js',
	context: path.resolve('src'),
	output: {
		filename: 'bundle-[name].js',
		path: path.resolve('public')
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,  //  что нe должно быть пропущено через загрузчик
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			},

			{
				test: /\.s?css$/,
				use: styleLoaders
			}
		]
	},

	plugins,

	optimization: {
		splitChunks: {
			chunks: 'all'
		},
	},

	devServer: {
		contentBase: path.resolve('dist'),
		publicPath: '/',
		port: 9000,
		hot: true
	}

};