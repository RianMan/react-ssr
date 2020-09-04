let {merge} = require('webpack-merge');
let baseConfig = require('./webpack.base');
let path = require('path');

module.exports = merge(baseConfig, {
    entry: path.resolve(__dirname,'src/client/index.js'),
    output: {
        filename: 'client.js',
        path: path.resolve(__dirname,'public')
    },
}) 