/**
 * @creater luyiming
 * @date 2019-09-12
 * @use read file in dll directory 
 */
const fs = require('fs');
const path = require('path');
const Webpack = require('webpack');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

// 正则
const vendorReg = /.*\.env\.dll\.js/;
const mainfestReg = /.*\.mainfest\.json/;

// 获取位于 /env_dll 下面的所有文件名 Array
const FliesList = fs.readdirSync( path.resolve(__dirname, '../../dll') );

// 遍历根据文件名生成 插件Array
const Plugins = FliesList.map( itemFileName => {
    if( vendorReg.test( itemFileName ) ){
        return new AddAssetHtmlWebpackPlugin({
            filepath: path.resolve(__dirname, '../../dll', itemFileName ),
            outputPath: 'dll',
            publicPath: 'dll/'
        }) 
    }
    if( mainfestReg.test( itemFileName ) ){
        return new Webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, "../../dll", itemFileName )
        }) 
    }
})

const Config = {
    plugins: Plugins
}

module.exports = Config