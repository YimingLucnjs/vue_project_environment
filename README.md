## Vue_ENV_Project

### 环境要求

> node 11.X npm 6.X 

### 支持语法

> es5,es6,es7,es8 ES草案Stage 0， Stage 1， Stage 2， Stage 3

### 项目启动

> 项目初始化 依赖下载`yarn / npm install` 

> 项目运行 `yarn dev / npm run dev`

> 如果yarn/npm 下载过慢 可以用 cnpm 淘宝的镜像来下载。 `yarn global add ncpm && ncpm install`

### 打包方式

> windows `yarn build / npm run build`

### 项目测试

> 目前 dev 环境

### 目录结构

```

├── .babelrc                                
├── .editorconfig
├── .gitignore
├── .postcssrc.js
├── .favicon.ico
├── README.md
├── package.json
├── src                             // 项目源码
│   ├── entry                       // 项目入口
│   ├── components                  // 所有的组件
│   ├── config                      // 配置文件 系统会根据配置文件生成主题样式，链接对应的环境
│   │   ├── env
│   │   │   ├── alpha.js
│   │   │   ├── beta.js
│   │   │   ├── dev.js
│   │   │   └── prod.js
|   |   ├── style                   // 全局scss变量函数配置
│   │   └── router                  // router配置文件，按照功能页面来配置
│   ├── fetch                       // 包装后的请求方法直接引用 
│   │   ├── apis-config.js
│   │   ├── config
│   │   │   ├── login.js
│   │   │   ├── permission.js
│   │   │   └── system.js
│   │   ├── fetch.js
│   │   └── index.js                // electron 唯一入口文件
│   ├── scss                        // scss文件，不用模块化的scss文件
│   │   ├── reset.scss              // 初始化样式 定义全局的类名
│   │   └── index.scss              // 引用暴露所有全局样式
│   ├── libs                        // 自己封装的插件库       
│   ├── store                       // vuex文件
│   ├── layout                      // 入口布局
│   └── views                       // 所有业务的页面组件
├── webpack                         // webpack对electron 和 react 进行打包的文件
│   ├── config                      // 配置文件 webpack的一些公用配置文件
│   ├── webpack.common.js           // dll打包
│   ├── webpack.config.js           // webpack的运行文件 根据环境自动选择运行相应配置文件
│   ├── webpack.dev.js              // 开发模式下运行的配置文件
│   └── webpack.prod.js             // 生产模式下的打包文件

```

### router配置方式

### 注意事项

> [详情见开发规范](./DEVSPEC.md)

### 引用的包与参考文件

> [vuex](https://github.com/electron-react-boilerplate/electron-react-boilerplate)

> [vue-router](https://github.com/electron-react-boilerplate/electron-react-boilerplate)

> [element-ui](https://github.com/sindresorhus/electron-store)

> [echarts](https://github.com/electron-react-boilerplate/electron-react-boilerplate)

> [axios](https://github.com/electron-react-boilerplate/electron-react-boilerplate)

> [lodash](https://github.com/atlassian/react-beautiful-dnd)

> [moment API](https://electronjs.org)

