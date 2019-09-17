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
import router from 'router';
import vuex from 'vuex';
import {Container,Header,Aside,Main,Row,Col,Menu,Submenu,MenuItem,MenuItemGroup,Icon, Button} from 'element-ui';
// import '$scss/element.scss';
import '$config/init/style/reset.scss';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(vueRouter)
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
Vue.use(Button)
// console.log('Button', Button)

new Vue({
    el: '#text',
    router,
    render(h) {
        return (
            <transition name="fade">
                <router-view class="view"></router-view>
            </transition>
        )
    },
    
})