<template>
    <div :id="className.syntheticData">
        <h4 :class="className.title">综合指数</h4>
        <el-row>
            <el-col :span="8" :class="className.chartStyle">
                <ls-echarts :id="'syntheticEchart'" :options="option"></ls-echarts>
            </el-col>
            <el-col :span="16">
                <el-row :gutter="20" :class="className.dataGrid">
                <el-col :span="6" v-for="(item,i) in syntheticList" :key="i" :class="className.category">
                    <div :class="className.wordStyle">
                        <span :class="className.point" :style="{'background-color': item.color}"></span>
                        <span :class="className.word">{{item.name}}</span>
                    </div>
                    <div :class="className.count">{{item.count}}</div>
                </el-col>
            </el-row>
            </el-col>
        </el-row>
        
    </div>
</template>

<script>
import dataClass from "./syntheticData.scss";
import lsEcharts from "$components/Echarts/Echarts";
import {pieChart} from "$src/libs/all-echart.js";
export default {
    components: {
        lsEcharts
    },
    data() {
        return {
            className: dataClass,
            option: {},
            syntheticList: [ // 默认数据
                {
                    name: '优秀',
                    count: '68',
                    color: 'rgba(136,239,182,1)'
                },
                {
                    name: '良好',
                    count: '98',
                    color: 'rgba(23,144,255,1)'
                },
                {
                    name: '达标',
                    count: '24',
                    color: 'rgba(244,208,104,1)'
                },
                {
                    name: '关注',
                    count: '12',
                    color: 'rgba(244,51,51,1)'
                }
            ]
        }
    },
    mounted() {
        let chartSeries = [];
        // 循环获取数据放入图表series中
        for(let item of this.syntheticList) {
            chartSeries.push({
                name: item.name,
                value: item.count,
                itemStyle: {
                    color: item.color
                }
            })
        }
        pieChart.series[0].name = '综合指数';
        pieChart.series[0].data = chartSeries.sort((a, b) => a.value - b.value)
        this.option = pieChart
    }
}
</script>

