<template>
    <div :id="className.abnormal">
        <h4 :class="className.title">异常情况</h4>
        <el-row :gutter="20">
            <el-col :span="6" v-for="(item,i) in abnormalList" :key="i" :class="className.colStyle">
                <div :class="className.word">{{item.name}}</div>
                <div :class="className.count" :style="{'color': item.color}">{{item.count}}</div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6" v-for="(item,i) in ratherList" :key="i">
                <span :class="className.ratherWord">{{item.name}}</span>
                <span :class="className.ratherWord"> {{item.percent}}</span>
                <i :class="item.status?'el-icon-caret-top '+className.caretTop:'el-icon-caret-bottom '+className.caretBottom"></i>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import abnormalClass from "./abnormal.scss";
export default {
    data() {
        return {
            className: abnormalClass,
            abnormalList: [ // 异常默认数据
                {
                    name: '当前异常',
                    count: '22',
                    color: 'rgba(74,74,74,1)'
                },
                {
                    name: '昨日异常',
                    count: '18',
                    color: 'rgba(74,74,74,1)'
                },
                {
                    name: '昨日未处理',
                    count: '04',
                    color: 'rgba(208,2,27,1)'
                },
                {
                    name: '本月异常',
                    count: '136',
                    color: 'rgba(74,74,74,1)'
                }
            ],
            ratherList: [ // 同比默认数据
                {
                    name: '月同比',
                    percent: '10%',
                    status: 0
                },
                {
                    name: '周同比',
                    percent: '12%',
                    status: 0
                },
                {
                    name: '日同比',
                    percent: '12%',
                    status: 1
                }
            ]
        }
    }
}
</script>

