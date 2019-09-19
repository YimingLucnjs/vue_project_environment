/*
 * @Company: JiangSu LangChuang
 * @Author: Lu YiMing
 * @Date: 2019-09-12 21:50:13
 * @LastAuthor: Lu YiMing
 * @lastTime: 2019-09-12 21:50:13
 * @FileUse: 文本文件用于
 */
const Webpack = require('webpack');
const path = require('path');

const Config = {
    entry: {
        "vue": ["vue/dist/vue.esm.js"],
        "vue_router": ["vue-router"],
        "vuex": ["vuex"],
        "lodash": ["lodash"],
        "moment": ["moment"],
        "axios": ["axios"],
        "echarts": ["echarts"],
    },
    output: {
        filename: "[name].env.dll.js",
        path: path.resolve(__dirname, "../dll"),
        library: "[name]",
    },
    plugins: [
        new Webpack.DllPlugin({
            name: "[name]",
            path: path.resolve(__dirname, "../dll/[name].mainfest.json")
        })
    ]
}

module.exports = Config;