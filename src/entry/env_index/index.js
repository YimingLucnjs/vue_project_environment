/*
 * @Company: JiangSu LangChuang
 * @Author: Lu YiMing
 * @Date: 2019-09-12 11:34:11
 * @LastAuthor: Lu YiMing
 * @lastTime: 2019-09-15 19:14:25
 * @FileUse: 文本文件用于
 */
import Vue from 'vue/dist/vue.esm.js';
import vueRouter from 'vue-router';
import router from 'router';
import vuex from 'vuex';
import {Container,Header,Aside,Main,Row,Col,Menu,Submenu,MenuItem,MenuItemGroup,Icon} from 'element-ui';
// import 'element-u/i/lib/theme-chalk/index.css';
import leftNav from '$views/layout/leftNav.vue';
import headNav from '$views/layout/headNav.vue';

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

new Vue({
    el: '#text',
    data: {
        msg: '1111',
        toggleCol: true
    },
    components: {
        leftNav, headNav
    },
    router,
    render(h) {
        return (
            <div>
                <transition name="fade">
                    <router-view class="view"></router-view>
                </transition>

                {/* <el-container>
                    <el-aside style="display:inline-block;width:auto;height:auto;">
                        <left-nav toggle={toggleCol}></left-nav>
                    </el-aside>
                    <el-container>
                        <el-header style="padding:0;">
                            <head-nav toggleFold="toggleFold"></head-nav>
                        </el-header>
                        <el-main style="background:rgba(240,241,241,1);">
                            <router-view></router-view>
                        </el-main>
                    </el-container>
                </el-container> */}
            </div>
        )
    },
    methods:{
        toggleFold(param) {
            this.toggleCol = param;
          }
    }
})