<template>
<div :id="className.deviceRun">
    <h4 :class="className.title">设备运行</h4>
    <el-row :gutter="20" :class="className.deviceCategory">
        <el-col :span="6">
            <div :class="className.deviceTotal">
                <div :class="className.deviceTotalWord">设备总数</div>
                <div :class="className.deviceTotalNum">1265</div>
            </div>
        </el-col>
        <el-col :span="6" v-for="(item,i) in enterpriseList" :key="i">
            <ls-echarts :id="'deviceEchart'+i" style="height:140px;" :options="options[i]"></ls-echarts>
            <div :class="className.name">{{item.name}}</div>
            <div :class="className.count">{{item.percent}}% <i :class="item.status?'el-icon-caret-top '+className.caretTop:'el-icon-caret-bottom '+className.caretBottom"></i></div>
        </el-col>
    </el-row>

</div>
</template>

<script>
import dataClass from "./deviceRun.scss";
import lsEcharts from "$components/Echarts/Echarts";
import {
    circlet
} from "$src/libs/all-echart.js";
export default {
    components: {
        lsEcharts
    },
    data() {
        return {
            className: dataClass,
            options: [],
            enterpriseList: [ // 默认数据
                {
                    name: '达标率',
                    count: '89',
                    color: '#FDB82A',
                    percent: '12',
                    status: 1
                },
                {
                    name: '在线率',
                    count: '92',
                    color: '#50E3C2',
                    percent: '12',
                    status: 0
                },
                {
                    name: '联动比',
                    count: '90',
                    color: '#50D2FE',
                    percent: '12',
                    status: 0
                }
            ]
        }
    },
    mounted() {
        this.enterpriseList.forEach((item, index) => {
            
            let data = [{
                    value: item.count,
                    name: item.name,
                    itemStyle: {
                        color: item.color
                    },
                    label: {
                        show: true,
                        position: 'center',
                        formatter: '{d}%',
                        color: '#000',
                        fontSize: 30
                    }
                },
                {  // 圆环空白地方
                    value: (100 - item.count),
                    name: item.name,
                    itemStyle: {
                        color: 'transparent'
                    }
                }
            ]
            let option = circlet({data})
            this.options.push(option);
        })
    }
}
</script>
