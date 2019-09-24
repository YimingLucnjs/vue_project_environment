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

import {Container,Header,Aside,Main,Row,Col,Menu,Submenu,MenuItem,MenuItemGroup,Icon,Avatar, Button, Table, TableColumn,Input,
    InputNumber,Radio,RadioGroup, RadioButton} from 'element-ui';
import '$scss/index.scss';
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
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
// vue原型添加echarts
Vue.prototype.$echarts = echarts

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
    mounted() {
        let timer = null;
        window.onresize = () => {
            if(timer) clearTimeout(timer);
            timer = setTimeout( () => {
                const wWidth = document.body.clientWidth || document.documentElement.clientWidth;
                this.$store.dispatch('system/windowSizeChange', wWidth)
            }, 200)
        }
        
    },
})