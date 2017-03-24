const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		'main': ['./src/js/app.ts'],
		// 'vendors': [ './src/js/vendors.js']
	},
	output: {
		path: path.resolve(__dirname, './build'),
		filename: './js/app.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [
				{
					loader: 'babel-loader',
				},
				{
					loader: 'ts-loader'
				}
				]
			},
			{
				test: /\.js$/,
				use: [{
					loader: "babel-loader",
					options: { presets: ["es2015"] }
				}],
			},
			{
			  test: /\.(scss|sass|css)$/,
			  use: ExtractTextPlugin.extract({
			  	fallback: 'style-loader',
          use: [
          	'css-loader', 'sass-loader'],
			  })
			},
			{ test: /\.(gif|png|jpe?g)$/i,
				loader: "file-loader?name=[name].[ext]&outputPath=/images/&publicPath=/../images/"
			},
      { test: /\.(ttf|eot|svg|woff(2))?$/, loader: "file-loader?name=[name].[ext]&outputPath=/fonts/&publicPath=/../fonts/&mimetype=font/woff2'" }
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'build'),
		compress: true,
		port: 9090,
		open: true,
		stats: "errors-only"
	},
	plugins: [
		new HtmlWebpackPlugin({
		template: './src/index.html'
	}),
		new ExtractTextPlugin(
			{
				filename: './css/style.css',
				disable: false,
				allChunks: true
			}),
	],
	 resolve: {
     modules: [
      "./node_modules"
    ],
    extensions: [".ts", ".js", ".json", ".scss", ".css", ".html"]
  }

}