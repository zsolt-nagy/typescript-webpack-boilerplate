var path = require('path');

var DIST_PATH = path.resolve( __dirname, 'dist' );
var SOURCE_PATH = path.resolve( __dirname, 'src' );
 
module.exports = {
    entry: SOURCE_PATH + '/main.ts',
    output: {
        path: DIST_PATH,   
        filename: 'bundle.js' 
    },  
    module: {
        loaders: [
        	{
        		test: /.ts?$/,
        		loader: 'ts-loader'
        	}
        ]
    }
};