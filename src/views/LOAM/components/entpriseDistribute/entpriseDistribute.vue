<template>
    <div :id="className.enterpriseDistribute">
        <h4 :class="className.title">企业分布及开业情况</h4>
        <el-row :gutter="20">
            <el-col :span="13" :class="className.chartStyle">
                <ls-echarts :id="'enterpriseEchart'" :options="option"></ls-echarts>
            </el-col>
            <el-col :span="11">
                <el-row :class="className.rightTopGrid">
                    <el-col :span="8" v-for="(item,i) in enterpriseList" :key="i" :class="className.category">
                        <div :class="className.wordStyle">
                            <span :class="className.point" v-show="item.color" :style="{'background-color': item.color}"></span>
                            <span :class="className.word">{{item.name}}</span>
                        </div>
                        <div :class="className.count">{{item.count}}</div>
                    </el-col>
                </el-row>
                <div :class="className.rank">
                    <div :class="className.rankTitle">企业分布数量排名前3</div>
                    <div v-for="(item,i) in fistEnterprise" :key="i" :class="[className.rankSerial,'clearfix']">
                        <div :class="className.serialNum">{{i+1}}</div>
                        <div :class="className.serialWord">{{item.name}}</div>
                        <div style="float:right">{{item.count}}</div>
                    </div>
                </div>
            </el-col>
        </el-row>
        
    </div>
</template>

<script>
import dataClass from "./entpriseDistribute.scss";
import lsEcharts from "$components/Echarts/Echarts";
import {overlapBar} from "$src/libs/all-echart.js";
export default {
    components: {
        lsEcharts
    },
    data() {
        return {
            className: dataClass,
            option: {},
            enterpriseList: [ // 默认数据
               {
                    name: '企业总数',
                    count: '192',
                    color: ''
                },
                {
                    name: '在排企业',
                    count: '178',
                    color: '#1790FF'
                },
                {
                    name: '停产企业',
                    count: '14',
                    color: '#FFC928'
                }
            ],
            fistEnterprise: [
                {
                    name: '某某区',
                    count: '30'
                },
                 {
                    name: '某某区',
                    count: '25'
                },
                 {
                    name: '某某区',
                    count: '25'
                }
            ]
        }
    },
    mounted() {
        this.option = overlapBar
    }
}
</script>

