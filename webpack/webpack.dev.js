/*
 * @creater: Lu YiMing
 * @Date: 2019-09-15 19:26:28
 * @use: use
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DllConfig = require('./config/dll.config.js');
const Config = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: 'dist/',
        open: true,
        port: 8081,
        hot: true,
        compress: true,
        noInfo: true,
        stats: 'errors-only',
        inline: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        watchOptions: {
          aggregateTimeout: 300,
          ignored: /node_modules/,
          poll: 100
        },
        clientLogLevel: 'warning',
        historyApiFallback: {
          verbose: true,
          disableDotRule: false
        },
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                exclude: [
                    /node_modules/,
                    path.resolve(__dirname, '../src/scss'),
                ],
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: 'env_[local]_[hash:base64:5]',
                                context: path.resolve(__dirname, 'src'),
                                hashPrefix: 'my-custom-hash',
                            },
                        }
                    },
                    "sass-loader",
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                path.resolve(__dirname, '../src/config/style/mixin.scss'),
                                path.resolve(__dirname, '../src/config/style/variable.scss'),
                            ]
                        }
                    },
                    'postcss-loader',
                ]
            },
            {
                test: /\.(css|scss)$/,
                include: [
                    /node_modules/,
                    path.resolve(__dirname, '../src/scss'),
                ],
                use: [
                    'style-loader',
                    'css-loader',
                    "sass-loader",
                ]
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/entry/env_index/index.html',
            inject: true,
            chunksSortMode: 'dependency',
            favicon: './favicon.ico',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}

module.exports = merge(Config, DllConfig);