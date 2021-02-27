const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.ts',
    },
    module: {
        rules: [
            {
                test: /(\.ts|\.tsx)$/, 
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
    mode: 'development',
    output: {
        filename: '[name].bundle.js', 
        path: path.resolve(__dirname, 'dist'),
    },
};