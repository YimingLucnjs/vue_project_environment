<template>
   <div>
       <el-row :gutter="20">
           <el-col :span="8">
               <Abnormal></Abnormal>
           </el-col>
           <el-col :span="8">
               <synthetic-data></synthetic-data>
           </el-col>
           <el-col :span="8">
               <dispose-rate></dispose-rate>
           </el-col>
       </el-row>
       <el-row :gutter="20" style="margin-top:20px;">
           <el-col :span="12">
               <entprise-distribute></entprise-distribute>
           </el-col>
           <el-col :span="12">
               <device-run></device-run>
           </el-col>
       </el-row>
       <el-row :class="className.tableStyle">
           <search-and-radio :radioGroup="radioGroup" :radio="radio" style="margin: 10px;"></search-and-radio>
           <Table :tableData="tableData" :tableHead="tableHead">
               <template slot="parent" slot-scope="scope">
                    <i v-if="scope.data.col.id === 'status'" :class="[iconList[scope.data.row[scope.data.col.id]].icon,iconList[scope.data.row[scope.data.col.id]].style]"></i>
                    <div v-else-if="scope.data.col.id === 'fanrun' || scope.data.col.id === 'operating'">
                        <i :class="[runStatus[scope.data.row[scope.data.col.id]].icon,runStatus[scope.data.row[scope.data.col.id]].style]">{{runStatus[scope.data.row[scope.data.col.id]].text||''}}</i>
                    </div>
                    <span v-else>{{scope.data.row[scope.data.col.id]}}</span>
               </template>
           </Table>
       </el-row>
   </div>
</template>

<script>
import dataClass from "./Homepage.scss";
import Abnormal from '$components/abnormal/abnormal.vue';
// 综合指数
import syntheticData from "../components/syntheticData/syntheticData";
// 处置率
import disposeRate from "../components/disposeRate/disposeRate";
// 企业分布
import entpriseDistribute from "../components/entpriseDistribute/entpriseDistribute";
// 设备运行
import deviceRun from "../components/deivceRun/deviceRun";
// 表格
import Table from "$components/Table/Table";
// 搜索框
import SearchAndRadio from "$components/SearchAndRadio/SearchAndRadio";

export default {
    components: {
        Abnormal,syntheticData,disposeRate,entpriseDistribute,deviceRun,Table,SearchAndRadio
    },
    data() {
        return {
            className: dataClass,
            radio: '1',
            iconList: { // 定义status图标根据状态显示
                '1': {icon: 'el-icon-success',style: dataClass.iconNormal},
                '2': {icon: 'el-icon-question ',style: dataClass.iconTrouble},
                '3': {icon: 'el-icon-warning ',style: dataClass.iconError},
                '4': {icon: 'el-icon-remove ',style: dataClass.iconOffline}
            },
            runStatus: { // 风机、净化器状态
                '1': {icon: 'el-icon-remove ',style: dataClass.iconOffline},
                '2': {icon: 'el-icon-check ',style: dataClass.iconCheck},
                '3': {text: '故障', style: dataClass.statusError}
            },
            tableData: [ // 表格数据
                {
                    status:'1',
                    enterprise: '某某大酒店',
                    point: '三楼楼道吊顶',
                    group: '1#机组',
                    concentration: '0.06',
                    pm: '22',
                    nonMethane: '0.32',
                    fanrun: '2',
                    operating: '3',
                    rate: '96%',
                    time: '2018/09/18 10:48'
                }
            ],
            tableHead: [ // 表头
                {
                    id: 'status',
                    name: ''
                },
                {
                    id: 'enterprise',
                    name: '企业名称'
                },
                {
                    id: 'point',
                    name: '排口'
                },
                {
                    id: 'group',
                    name: '机组'
                },
                {
                    id: 'concentration',
                    name: '油烟浓度'
                },
                {
                    id: 'pm',
                    name: '颗粒物'
                },
                {
                    id: 'nonMethane',
                    name: '非甲烷总烃'
                },
                {
                    id: 'fanrun',
                    name: '风机运行状态'
                },
                {
                    id: 'operating',
                    name: '净化器运行状态'
                },
                {
                    id: 'rate',
                    name: '达标率'
                },
                {
                    id: 'time',
                    name: '时间'
                },
            ],
            radioGroup: [
                {
                    name: '全部',
                    count: '192',
                    label: '1'
                },
                {
                    name: '正常',
                    count: '190',
                    label: '2'
                },
                {
                    name: '异常',
                    count: '2',
                    label: '3'
                },
                {
                    name: '在线',
                    count: '165',
                    label: '4'
                },
                {
                    name: '离线',
                    count: '27',
                    label: '5'
                },
            ]
        }
    }
}
</script>
