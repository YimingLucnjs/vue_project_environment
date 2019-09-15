/*
 * @Company: JiangSu LangChuang
 * @Author: Lu YiMing
 * @Date: 2019-09-15 12:32:23
 * @LastAuthor: Lu YiMing
 * @lastTime: 2019-09-15 19:15:11
 * @FileUse: 文本文件用于
 */
import Router from 'vue-router';

import Test from '$views/test/test.vue';
// 路由
const Routers = [
    {
        path: '/',
        name: 'index',
        component: Test
    },
];
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