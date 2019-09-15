
/*
 * @Company: JiangSu LangChuang
 * @Author: Lu YiMing
 * @Date: 2019-09-07 15:13:29
 * @LastAuthor: Lu YiMing
 * @lastTime: 2019-09-14 18:42:05
 * @FileUse: 文本文件用于
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
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({}),
    ],
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
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
            {
                test: /scss(\/|\\).*\.scss$/,
                use: [{
                    loader: "style-loader",
                },
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
                        // Provide path to the file with resources
                        // Or array of paths
                        resources: [
                            '../src/scss/mixin.scss',
                            '../src/scss/variables.scss',
                        ],
                    },
                },
                    'postcss-loader',
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({}),
            new TerserJSPlugin(),
        ]
    }
}

module.exports = merge(Config, DllConfig);