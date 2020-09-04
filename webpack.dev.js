let {merge} = require('webpack-merge');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let baseConfig = require('./webpack.base');
let path = require('path');

module.exports = merge(baseConfig, {
    entry: path.resolve(__dirname,'src/client/index.js'),
    output: {
        filename: 'client.js',
        path: path.resolve(__dirname,'public')
    },
    devServer: {
        contentBase: path.resolve(__dirname,'public'),
        compress: true,
        port: 8080
    },
    plugins: [new HtmlWebpackPlugin({
        template: './index.html'
    })]
}) 