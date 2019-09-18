/*
 * @creater: Lu YiMing
 * @Date: 2019-09-15 19:26:28
 * @use: use
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const merge = require('webpack-merge');
const DllConfig = require('./config/dll.config.js');
const Config = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/entry/env_index/index.html',
            inject: true,
            chunksSortMode: 'dependency',
            minify: {
                removeComments: true,
            },
            favicon: './favicon.ico'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({}),
    ],
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
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    "sass-loader",
                ]
            },
        ]
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({}),
            new TerserJSPlugin(),
        ]
    }
}

module.exports = merge(Config, DllConfig)