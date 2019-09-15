/*
 * @Company: JiangSu LangChuang
 * @Author: Lu YiMing
 * @Date: 2019-09-07 15:13:29
 * @LastAuthor: Lu YiMing
 * @lastTime: 2019-09-15 19:15:32
 * @FileUse: 文本文件用于
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
        port: 9090,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
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
                                path.resolve(__dirname, '../src/scss/mixin.scss'),
                                path.resolve(__dirname, '../src/scss/variable.scss'),
                            ]
                        }
                    },
                    'postcss-loader',
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
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}

module.exports = merge(Config, DllConfig);