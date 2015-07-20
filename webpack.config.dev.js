var webpack = require('webpack');

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'webpack-dev-server/client?http://localhost:3001',
		'webpack/hot/only-dev-server',
		'./src/client/entry',
	],
	output: {
		path: __dirname + '/build/assets/js/',
		filename: 'bundle.js',
		publicPath: 'http://localhost:3001/js',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
	],

	resolve: {
		extensions: ['', '.js']
	},

	module: {
		loaders: [{
			test: /\.jsx?$/,
			loaders: ['react-hot', 'babel-loader?experimental'], exclude: /node_modules/
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /\.scss/,
			loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
		}, {
			test: /\.(png|jpg|woff|woff2)$/,
			loader: 'url-loader?limit=8192'
		}]
	}
}
