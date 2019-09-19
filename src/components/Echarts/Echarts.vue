<template>
<div :id="id" style="height:100%;width:100%;">

</div>
</template>

<script>
export default {
    props: ['options', 'id'],
    data: function () {
        return {
            myChart: ''
        }
    },
    watch: {
        options(val) {
            console.log(val);
            
            this.myChart = this.$echarts.init(document.getElementById(this.id));
            this.myChart.setOption(val);
        },
        windowResized() {
            // 窗口改变时图表重新绘制
            this.myChart.resize()
        }
    },
    mounted(){
        
    },
    computed: {
        // 通过vuex监听窗口大小
        windowResized() {
            return this.$store.state.system.windowResized
        }
    }
}
</script>
