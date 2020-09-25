const path = require('path');
require('dotenv').config();


module.exports = {
    entry: './client/src/index.jsx',
    mode: process.env.ENV_MODE,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'client/dist'),
    },
    module: {
        rules: [{
            test: /\.m?jsx$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
            }
        }]
    }
}