const merge = require("webpack-merge");

// const CommonConfig = ;
// // dll 打包配置
// const DllConfig = ;
// // prod 打包配置
// const ProdConfig = ;
// // dev 打包配置
// const DevConfig = 

module.exports = (env)=>{
	if( env && env.progress && env.progress === "build" ){
		return merge(require("./config/theme.config.js"), require("./webpack.prod.js"))
    }
    if( env && env.progress && env.progress === "dev" ){
		return merge(require("./config/theme.config.js"), require("./webpack.dev.js"))
    }
    if( env && env.progress && env.progress === "dll" ){
		return require("./webpack.common.js")
    }
}