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
                <ls-echarts :id="'deviceEchart'+i" style="height:140px;" :options="option[i]"></ls-echarts>
            </el-col>
        </el-row>
        
    </div>
</template>

<script>
import dataClass from "./deviceRun.scss";
import lsEcharts from "$components/Echarts/Echarts";
import {circlet} from "$src/libs/all-echart.js";
export default {
    components: {
        lsEcharts
    },
    data() {
        return {
            className: dataClass,
            option: [],
            enterpriseList: [ // 默认数据
               {
                    name: '达标率',
                    count: '89',
                    color: '#FDB82A'
                },
                {
                    name: '在线率',
                    count: '92',
                    color: '#50E3C2'
                },
                {
                    name: '联动比',
                    count: '90',
                    color: '#50D2FE'
                }
            ]
        }
    },
    mounted() {
        this.enterpriseList.forEach((item,index) => {
            let data = [
                {value:item.count, name:item.name,itemStyle:{
                    color:item.color
                },label: {
                    show:true,
                    position: 'center',
                    formatter: '{d}%',
                    color: '#000',
                    fontSize: 30
                }},
                {value:(100 - item.count), name:item.name,itemStyle:{
                    color:'transparent'
                }}
            ]
            circlet.series[0].data = data;
            this.option.push(circlet);
        })
        console.log(this.enterpriseList)
        // this.option = circlet


    }
}
</script>

