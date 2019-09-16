<template>
  <div :class="className.header">
      <el-row :class="className.headerlayout">
          <el-col :span="3">
              <div :class="className.fold" @click="toggle">
                  <i :class="[iconFold?'el-icon-s-unfold':'el-icon-s-fold',className.i]"></i>
              </div>
          </el-col>
          <el-col :span="8">
              <div>餐饮油烟监测管理系统</div>
          </el-col>
          <el-col :span="4" :offset="9">
              <div :class="className.avatar"></div>
              <span>用户名</span>
          </el-col>
      </el-row>
  </div>
</template>

<script>
import layout from './layout.scss';
export default {
  components: {
      
  },
  data() {
    return {
      iconFold: true,
      className: layout
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
