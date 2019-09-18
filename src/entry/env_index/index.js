/*
 * @Company: JiangSu LangChuang
 * @Author: Lu YiMing
 * @Date: 2019-09-12 11:34:11
 * @LastAuthor: Please set LastEditors
 * @lastTime: 2019-09-17 08:44:10
 * @FileUse: 文本文件用于
 */
import Vue from 'vue/dist/vue.esm.js';
import vueRouter from 'vue-router';

import {Container,Header,Aside,Main,Row,Col,Menu,Submenu,MenuItem,MenuItemGroup,Icon,Avatar, Button} from 'element-ui';
// import '$scss/element.scss';
import '$config/init/style/reset.scss';
// import 'element-ui/lib/theme-chalk/index.css';
import '$config/element-ui/element.scss';
// router实例
import router from 'router';
// vuex实例
import store from '$store';
// 引入echarts
import echarts from 'echarts'
// vue-router
Vue.use(vueRouter)
//element-ui 按需引入组件
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Icon)
Vue.use(Avatar)
Vue.use(Button)
// vue原型添加echarts
Vue.prototype.$echarts = echarts

setTimeout( () => {
    // debugger
    // store.dispatch('windowSizeChange', '212112')
    console.log(store)
}, 5000)

new Vue({
    el: '#text',
    router,
    store,
    render(h) {
        return (
            <transition name="fade">
                <router-view class="view"></router-view>
            </transition>
        )
    },
    data:{
        // windowResized:this.$store.state.system.windowResized,
    },
    
})