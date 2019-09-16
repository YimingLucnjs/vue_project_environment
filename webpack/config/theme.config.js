/*
 * @creater: Lu YiMing
 * @Date: 2019-09-15 19:26:28
 * @use: use
 */
/**
 * @creater luyiming
 * @date 2019-09-12
 * @use the same webpack config 
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const Config = {
    entry: {
        index: './src/entry/env_index/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(process.cwd(), './dist')
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '$views': path.resolve(process.cwd(), 'src', 'views'),
            '$entry': path.resolve(process.cwd(), 'src', 'entry'),
            '$config': path.resolve(process.cwd(), 'src', 'config'),
            '$scss': path.resolve(process.cwd(), 'src', 'scss'),
            'router': path.resolve(process.cwd(), 'src', 'config', 'router')
        }
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/images/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/fonts/[name].[hash:7].[ext]'
                }
            }


        ]
    },
    plugins: [
        new VueLoaderPlugin({}),
    ]
}
module.exports = Config