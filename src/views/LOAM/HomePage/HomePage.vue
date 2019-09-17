<template>
   <div>
       <el-row :gutter="20">
           <el-col :span="8">
               <Abnormal></Abnormal>
           </el-col>
           <el-col :span="8">
               <Abnormal></Abnormal>
           </el-col>
           <el-col :span="8">
               <Abnormal></Abnormal>
           </el-col>
       </el-row>
   </div>
</template>

<script>
import Abnormal from '$components/abnormal/abnormal.vue';
export default {
    components: {
        Abnormal
    }
}
</script>
