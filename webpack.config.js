const path = require('path');
const SRC_DIR = path.join(__dirname + '/react-client/src');
const PUBLIC_DIR = path.join(__dirname + '/react-client/public');
const webpack = require('webpack');

module.exports = {
	entry: `${SRC_DIR}/index.jsx`,
	output:{
		path: PUBLIC_DIR,
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js','.jsx','.json','.css']
	},
	module : {
		rules : [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.png$/,
				loader: 'url-loader'
			},
			{
				test: /\.jpg/,
				loader:'file-loader'
			},
			{
				test :/\.jsx?/,
				include : SRC_DIR,
				loader : 'babel-loader',
				query: {
					presets: ['@babel/preset-env', '@babel/preset-react']
				}
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV' : JSON.stringify('productionk')
		})
	]
}