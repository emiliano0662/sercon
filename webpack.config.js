const ExtractTextPlugin = require("extract-text-webpack-plugin");

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const path = require('path');


const extractSass = new ExtractTextPlugin({
    filename: "css/bundle.min.css"
});

const uglifyJs = new UglifyJsPlugin();


const config = {
  	entry: [
  		'./src/scss/main.scss',
		'./src/js/jquery.appear.js',
		'./src/js/owl.carousel.min.js',
  		'./src/js/main.js'
  	],
 	output: {
    	path: path.resolve(__dirname, './dist/assets'),
    	filename: 'js/bundle.min.js'
  	},
  	module: {
  		rules: [{
            test: /\.scss$/, 
            use: extractSass.extract({
                use: [{
                    loader: "css-loader",
                    options: {
	                    url: false,
	                    minimize: true,
	                    sourceMap: false
	                }
                }, {
                    loader: "sass-loader"
                }],

                fallback: "style-loader"
            })
        }]
  	},
  	plugins: [
  		extractSass,
  		uglifyJs
  	]
};

module.exports = config;