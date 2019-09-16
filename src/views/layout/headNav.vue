<template>
  <div id="header">
      <el-row class="header-layout">
          <el-col :span="3">
              <div class="fold" @click="toggle">
                  <i :class="iconFold?'el-icon-s-unfold':'el-icon-s-fold'"></i>
              </div>
          </el-col>
          <el-col :span="8">
              <div>餐饮油烟监测管理系统</div>
          </el-col>
          <el-col :span="4" :offset="9">
              <div class="avatar"></div>
              <span>用户名</span>
          </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      iconFold: true
    };
  },
  methods: {
    toggle() {
        this.iconFold = !this.iconFold;
        this.$emit('toggleFold', this.iconFold)
    }
  },
  created() {},
  mounted() {
        
  }
};
</script>

<style>
    .header-layout i{
        font-size: 24px;
    }
    .fold {
        display: inline-block;
        vertical-align: middle;
        width: 34px;
        height: 34px;
        line-height: 38px;
        border-radius: 50%;
        cursor: pointer;
        text-align: center;
        transition: .7s;
    }
    .fold:hover {
        background: #C6C6C6;
    }
    .avatar {
        border-radius: 50%;
        width: 26px;
        height: 26px;
        background:rgba(242,242,242,1);
        border:1px solid rgba(190,190,190,1);
        display: inline-block;
        vertical-align: middle;
    }
</style>
