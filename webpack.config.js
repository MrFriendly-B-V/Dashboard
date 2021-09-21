'use strict';
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
	entry: './src/ts/index.ts',
	output: {
		filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'var',
        library: 'Dashboard'
	},
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    },
    mode: "development"
};