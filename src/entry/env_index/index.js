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

Vue.use(vueRouter)

new Vue({
    el: '#text',
    data: {
        msg: '1111',
    },
    router,
    render(h) {
        return (
            <div>
                aaaaaa
                <transition name="fade">
                    <router-view class="view"></router-view>
                </transition>
            </div>
        )
    }
})