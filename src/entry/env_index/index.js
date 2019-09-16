/*
 * @Company: JiangSu LangChuang
 * @Author: Lu YiMing
 * @Date: 2019-09-12 11:34:11
 * @LastAuthor: Please set LastEditors
 * @lastTime: 2019-09-16 12:45:57
 * @FileUse: 文本文件用于
 */
import Vue from 'vue/dist/vue.esm.js';
import vueRouter from 'vue-router';
import router from 'router';
import vuex from 'vuex';
import {Container,Header,Aside,Main,Row,Col,Menu,Submenu,MenuItem,MenuItemGroup,Icon, Button} from 'element-ui';
// import '$scss/element.scss';
import '$config/init/style/reset.scss';
// import 'element-ui/lib/theme-chalk/index.css';
import '$config/element-ui/element.scss';
import LeftNav from '$views/layout/leftNav.vue';
import HeadNav from '$views/layout/headNav.vue';

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
    data: {
        msg: '1111',
        toggleCol: false
    },
    components: {
        LeftNav, HeadNav
    },
    router,
    render(h) {
        return (
            <div style="height:100%">
                {/* <transition name="fade">
                    <router-view class="view"></router-view>
                </transition> */}
                {/* <el-button>sadsa</el-button> */}
                <el-container>
                    <el-aside style="display:inline-block;width:auto;height:auto;">
                        <LeftNav toggle={ this.toggleCol }></LeftNav>
                    </el-aside>
                    <el-container>
                        <el-header style="padding:0;">
                            <HeadNav toggleFold={ this.toggleFold }></HeadNav>
                        </el-header>
                        <el-main style="background:rgba(240,241,241,1);">
                            <router-view></router-view>
                        </el-main>
                    </el-container>
                </el-container>
            </div>
        )
    },
    methods:{
        toggleFold(param) {
            this.toggleCol = param;
          }
    }
})