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
               <Abnormal></Abnormal>
           </el-col>
       </el-row>
   </div>
</template>

<script>
import Abnormal from '$components/abnormal/abnormal.vue';
// 综合指数
import syntheticData from "../components/syntheticData/syntheticData";
export default {
    components: {
        Abnormal,syntheticData
    }
}
</script>
