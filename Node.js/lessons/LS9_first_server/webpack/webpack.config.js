const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			},
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'Mega project', // --> имеет меньший приоритет, если указываем template
			template: 'index.html'
			// filename: 'name.html', --> имя выходящего файта
			// favicon: 'images/favicon.ico' --> откуда брать иконку
		}),

		new ExtractTextPlugin({
			// filename: 'style-[contenthash].css',
			filename: (getPath) => {
				return getPath(`style-${Date.now()}.css`);
			}
		})
	],

	optimization: {
		splitChunks: {
			chunks: 'all'
		},
	}

};