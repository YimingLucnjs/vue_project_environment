<template>
<div :class="className.leftnav">
    <el-menu :default-active="'HomePageLOAM'" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="toggle" background-color="#405889" text-color="#fff" active-text-color="#ffd04b" router>
        <el-menu-item> </el-menu-item>
        <el-menu-item v-for="item in noneChildMenu" :key="item.id" :index="item.navTo">
            <i :class="item.icon"></i>
            <span slot="title">{{item.navName}}</span>
        </el-menu-item>
        <el-submenu v-for="item in haveChildMenu" :key="item.id" :index="item.id">
            <template slot="title">
                <i :class="item.icon"></i>
                <span slot="title">{{item.navName}}</span>
            </template>
            <el-menu-item-group>
                <el-menu-item v-for="(itemChild,ind) in item.children" :key="ind" :index="itemChild.navTo">{{itemChild.navName}}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>

    </el-menu>
</div>
</template>

<script>
import {
    setTimeout
} from 'timers';
import LeftNav from './LeftNav.scss';
export default {
    components: {},
    props: {
        toggle: Boolean,
        required: true
    },
    watch: {},
    data() {
        return {
            isCollapse: true,
            className: LeftNav,
            listData: [{
                    id: '1',
                    navName: '首页',
                    navTo: 'HomePageLOAM',
                    icon: 'el-icon-s-home'
                },

                {
                    id: '2',
                    navName: '历史数据',
                    navTo: '/',
                    icon: 'el-icon-s-data'
                },
                //   {
                //     id:'4',
                //     navName: '导航四',
                //     icon: 'el-icon-setting',
                //     navTo: 'index'
                // },
            ],
            haveChildMenu: [],
            noneChildMenu: []
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
    },
    created() {},
    mounted() {
        this.haveChildMenu = this.listData.filter(item => item.children)
        this.noneChildMenu = this.listData.filter(item => !item.children)
    },
    computed: {
        windowResized() {
            return this.$store.state.system.windowResized < 1400
        }
    }
}
</script>
