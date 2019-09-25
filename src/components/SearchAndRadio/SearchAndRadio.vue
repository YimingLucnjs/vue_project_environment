<template>
  <el-row>
    <el-col :span="6">
      <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="search"></el-input>
    </el-col>
    <el-col :offset="2" :span="16">
        <el-radio-group v-model="radio">
            <el-radio :label="item[key.label]" v-for="(item,i) in radioGroup" :key="i" >{{item[key.name]}} {{item.count}}</el-radio>
        </el-radio-group>
    </el-col>
  </el-row>
</template>

<script>
export default {
    props: {
        search: {
            type: String,
            default: ''
        },
        radio: {
            type: [String,Array],
            default: ''
        },
        radioGroup: {
            type: Array,
            default: []
        },
        key: {
            type: Object,
            default: {
                name: 'name',
                label: 'label'
            }
        }
    }
};
</script>

<style>
</style>