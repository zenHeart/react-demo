/**
 * Created by lockepc on 2017/7/5.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    entry: {
        app: './src/index.js',
    }, plugins: [
        new HtmlWebpackPlugin({
            title: '基础配置',
            template:'index.html',
        }), new CleanWebpackPlugin(['dist']),
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }, module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
              }, {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: "babel-loader"
              }
        
        ]
    }
};
