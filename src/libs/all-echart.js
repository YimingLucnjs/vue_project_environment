// 重叠柱状图
var overlapBar = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter(params) {
            const item = params[0];
            const item1 = params[2];
            return `
                    ${item.name}：${item.data} 
                    <br/> ${item.name}：${item1.data}
                   `;
        },
    },
    legend: {
        data: ['邮件营销', '联盟广告'],
        textStyle: {
            color: '#ccc'
        },
        show:false
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#777',
                }
            },
            axisLabel: {
                color: '#777'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#777',
                }
            }
        }
    ],
    series: [
        {
            name: '邮件营销',
            type: 'bar',
            itemStyle: {
                color: 'yellow'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {  // 替代柱状图 默认不显示颜色，是最下方柱图（邮件营销）的value值 - 20 
            type: 'bar',
            barGap: '-100%',
            stack: '广告',
            itemStyle: {
                color: 'transparent'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'bar',
            barGap: '-100%',
            stack: '广告',
            itemStyle: {
                color: "blue"
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        }

    ]
}
// 圆环
var circlet = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接访问','邮件营销'],
        show: false
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '50%'],
            avoidLabelOverlap: false,
            // label: {
            //     normal: {
            //         show: true,
            //         align: 'center',
            //         formatter(params) {
            //             const item = params[0];
            //             console.log(params)
            //             return `
            //                     ${params.data.value}%
            //                    `;
            //         },
            //         fontSize: 30,
            //         color:"#000"
            //     },
            // },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:80, name:'直接访问',itemStyle:{
                    color:'#FDB82A'
                },label: {
                    show:true,
                    position: 'center',
                    formatter: '{d}%',
                    color: '#000',
                    fontSize: 40
                }},
                {value:20, name:'邮件营销',itemStyle:{
                    color:'transparent'
                }}
            ]
        }
    ]
};
//  饼图
var pieChart = {
    tooltip : {
        trigger: 'item',
        /**
         * 参数：
         * @param {*} point 鼠标位置，如 [20, 40]
         * @param {*} params 同 formatter 的参数相同
         * @param {*} dom tooltip 的 dom 对象
         * @param {*} rect 只有鼠标在图形上时有效，是一个用x, y, width, height四个属性表达的图形包围盒
         * @param {*} size 包括 dom 的尺寸和 echarts 容器的当前尺寸，例如：{contentSize: [width, height], viewSize: [width, height]}
         * @returns {Array} point 点位位置
         */
        position: function(point, params, dom, rect, size){ // point: 鼠标位置
            var tipHeight = point[1] + size.contentSize[1]; // contentSize: 提示dom 窗口大小
            if(tipHeight > size.viewSize[1] ){              // viewSize: echarts 容器大小
                return [point[0]+40, point[1]-size.contentSize[1]];
            } else if(point[1] < size.contentSize[1]){
                return [point[0]+40, point[1]+20];
            } else {
                return point;
            }
        },
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '100%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:274, name:'联盟广告'},
                {value:400, name:'搜索引擎'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                show: false
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};
export {
    overlapBar,
    circlet,
    pieChart
}