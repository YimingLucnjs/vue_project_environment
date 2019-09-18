/*
 * @Company: JiangSu LangChuang
 * @Author: Lu YiMing
 * @Date: 2019-09-15 12:32:23
 * @LastAuthor: Please set LastEditors
 * @lastTime: 2019-09-17 09:02:57
 * @FileUse: 文本文件用于
 */
import Router from 'vue-router';

import EnvIndex from '$layout/env_index/index.js';
// 路由
const Routers = [{
    path: '/',
    name: 'EnvIndex',
    component: EnvIndex,
    children: [{
        path: `/HomePageLOAM`,
        name: '首页',
        component: (resolve) => require(['$views/LOAM/HomePage/HomePage.vue'], resolve),
    }, {
        path: `/test`,
        name: '测试',
        component: (resolve) => require(['$views/test/test.vue'], resolve),
    }, ]
}, ];
const RouterExample = new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({ y: 0 }),
    routes: Routers
});
// 路由权限验证
RouterExample.beforeEach((to, from, next) => {
    // 是否登录
    // if (!window.sessionStorage.getItem('userInfo')) { //&& to.path.indexOf("login") == -1
    //     location.href = '/login.html'
    // }
    return next();
});

export default RouterExample;