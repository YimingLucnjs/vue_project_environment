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
   </div>
</template>

<script>
import Abnormal from '$components/abnormal/abnormal.vue';
// 综合指数
import syntheticData from "../components/syntheticData/syntheticData";
// 处置率
import disposeRate from "../components/disposeRate/disposeRate";
// 企业分布
import entpriseDistribute from "../components/entpriseDistribute/entpriseDistribute";
// 设备运行
import deviceRun from "../components/deivceRun/deviceRun";
export default {
    components: {
        Abnormal,syntheticData,disposeRate,entpriseDistribute,deviceRun
    }
}
</script>
