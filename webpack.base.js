module.exports = {
    mode:'development',
    watch: true,
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: { 
                    loader: 'babel-loader',
                    // options:{
                    //     presets: ['@babel/preset-env','@babel/preset-react'],
                    //     plugins: [
                    //     ["@babel/plugin-proposal-decorators",{ "legacy": true }],
                    //     '@babel/plugin-proposal-class-properties',
                    //     "@babel/plugin-transform-async-to-generator",
                    //     '@babel/plugin-transform-runtime', 
                    // ]
                    // }
                },
                exclude: /node_modules/,
            }
        ]
    },
}