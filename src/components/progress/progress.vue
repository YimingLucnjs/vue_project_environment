<template>
    <canvas id="progress" :height="height" :width="width" ></canvas>
</template>

<script>
export default {
    props: {
        width: {
            type: [String,Number],
            default: () => ''
        },
        height: {
            type: [String,Number],
            default: 55
        },
        color: {
            type: String,
            default: '#1790FF'
        },
        value: {
            type: Number,
            default: 86
        }
    },
    data() {
        return {
            progress: 0
        }
    },
    watch: {
        width(val) {
             setTimeout(() => {
                const canvas = document.getElementById('progress');
                const context = canvas.getContext('2d')
                this.drawProgress(context,canvas)
             },1000)
        }
    },
    methods: {
        drawProgress(context, canvas) {
            // 清空画布，重新绘制
            context.clearRect(0,0,canvas.width,canvas.height);
            // 绘制背景
            context.beginPath();
            context.lineWidth = 12;
            context.strokeStyle = "#F2F2F2";
            context.lineTo(0,canvas.height/2); // 
            context.lineTo(canvas.width - 30,canvas.height/2);
            context.stroke();
            context.closePath(); 
             // 开始绘制线段
            context.beginPath();
            context.lineWidth = 12;// 设置线宽
            context.strokeStyle = this.color;// 画笔颜色
            context.lineTo(0,canvas.height/2);
            context.lineTo(this.progress,canvas.height/2);
            context.stroke();
            context.closePath();
            this.progress++;
            if(this.progress <= (canvas.width - 50 - (100 - this.value))){
                // 通过setTimeout进行递归调用更新
                setTimeout(()=>{
                    this.drawProgress(context, canvas);
                },0)
            }
        }
    },
    mounted() {
        const canvas = document.getElementById('progress');
        const context = canvas.getContext('2d')
        // 调用画图方法
        // this.drawProgress(context,canvas)
    }
}
</script>