<template>
  <div :class="className.leftnav">
    <el-menu
      :default-active="this.$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="toggle"
      background-color="#405889"
      text-color="#fff"
      active-text-color="#ffd04b"
       router
    >
     <el-menu-item> </el-menu-item>
      <el-submenu v-for="item in haveChildMenu" :key="item.id" :index="item.id">
            <template slot="title">
                <i :class="item.icon"></i>
                <span slot="title">{{item.navName}}</span>
            </template>
            <el-menu-item-group>
                <el-menu-item v-for="(itemChild,ind) in item.children" :key="ind" :index="itemChild.navTo" >{{itemChild.navName}}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-menu-item v-for="item in noneChildMenu" :key="item.id" :index="item.navTo" >
        <i :class="item.icon"></i>
        <span slot="title">{{item.navName}}</span>
      </el-menu-item>
      
    </el-menu>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
import LeftNav from './LeftNav.scss';
export default {
  components: {},
  props: {
      toggle: Boolean,
      required: true
    },
    watch: {
    },
  data() {
    return {
      isCollapse: true,
      className: LeftNav,
      toggleIcon: 'el-icon-s-unfold',
      listData: [
          {
              id:'1',
              navName: '导航一',
              icon: 'el-icon-location',
              children: [
                  {navName: '选项1',id:'1-1',navTo: 'Hello1'},
                  {navName: '选项2',id:'1-2',navTo: 'Hello2'},
                  {navName: '选项3',id:'1-3',navTo: 'Hello3'},
                  {navName: '选项4',id:'1-4',navTo: 'Hello4'}
              ]
          },
            {
              id:'2',
              navName: '导航二',
              icon: 'el-icon-menu',
              children: [
                  {navName: '选项1',id:'2-1',navTo: 'Hello5'},
                  {navName: '选项2',id:'2-2',navTo: 'Hello6'},
                  {navName: '选项3',id:'2-3',navTo: 'Hello7'},
                  {navName: '选项4',id:'2-4',navTo: 'Hello8'}
              ]
          },
            {
              id:'3',
              navName: '导航三',
              icon: 'el-icon-document',
              navTo: 'Hello9'
          },
            {
              id:'4',
              navName: '导航四',
              icon: 'el-icon-setting',
              navTo: 'index'
          },
      ],
      haveChildMenu: [],
      noneChildMenu: []
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created() {},
  mounted() {
        this.haveChildMenu = this.listData.filter(item => item.children)
        this.noneChildMenu = this.listData.filter(item => !item.children)
  }
};
</script>

