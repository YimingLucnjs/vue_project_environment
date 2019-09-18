<template>
    <div :id="className.syntheticData">
        <h4 :class="className.title">综合指数</h4>
        
        
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
            
        }
    },
    mounted() {
        
    }
}
</script>

