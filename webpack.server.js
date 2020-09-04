let {merge} = require('webpack-merge');
let baseConfig = require('./webpack.base');
let path = require('path');
var nodeExternals = require('webpack-node-externals');
module.exports = merge(baseConfig, {
    target: 'node',
    entry: path.resolve(__dirname,'src/server/index.js'),
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname,'main')
    },
    externals: [nodeExternals()]
}) 