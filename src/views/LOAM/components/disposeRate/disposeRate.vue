<template>
    <div :id="className.disposeRate">
        <h4 :class="className.title">处置率</h4>
        <el-row :gutter="20" :class="className.dataGrid">
            <el-col :span="6">
                <div :class="className.word">处置率</div>
                <div :class="className.count">89%</div>
            </el-col>
            <el-col :span="6" style="height:1px;"></el-col>
            <el-col :span="6" v-for="(item,i) in syntheticList" :key="i" :class="className.category">
                    <div :class="className.wordStyle">
                        <span :class="className.point" :style="{'background-color': item.color}"></span>
                        <span :class="className.word">{{item.name}}</span>
                    </div>
                    <div :class="className.count">{{item.count}}</div>
                </el-col>
        </el-row>
        <div :class="className.progress">
            <ls-progress :width="proWidth"></ls-progress>
        </div>
    </div>
</template>

<script>
import dataClass from "./disposeRate.scss";
import lsProgress from "$components/progress/progress";
export default {
    components: {
        lsProgress
    },
    data() {
        return {
            className: dataClass,
             syntheticList: [ // 默认数据
                {
                    name: '已处理',
                    count: '34',
                    color: '#1790FF'
                },
                {
                    name: '未处理',
                    count: '04',
                    color: '#F2F2F2'
                }
            ],
            proWidth:0
        }
    },
    mounted() {
        const progressId = document.querySelector('#progress');
        this.proWidth = progressId.parentNode.clientWidth;
    }
}
</script>

