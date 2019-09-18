<template>
<div :id="id" style="height:100%;width:100%;">

</div>
</template>

<script>
export default {
    props: ['options', 'id'],
    data: function () {
        return {

        }
    },
    watch: {
        options(val) {
            console.log(val);

            var myChart = this.$echarts.init(document.getElementById(this.id));
            myChart.setOption(val);
        }
    },
    mounted: function () {

    }
}
</script>
