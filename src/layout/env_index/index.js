/*
 * @creater: Lu YiMing
 * @Date: 2019-09-17 08:29:34
 * @use: use
 */
import LeftNav from '$components/LeftNav/LeftNav.vue';
import HeadNav from '$components/Header/HeadNav.vue';
export default {
    name: 'env_system_index',
    data() { 
        return {
            // 控制左侧导航的显示方式（小屏/大屏）
            toggleCol: false
        }
    },
    render(){
        return (
            <el-container>
                <el-aside style="display:inline-block;width:auto;height:auto;">
                    <LeftNav toggle={ this.toggleCol }></LeftNav>
                </el-aside>
                <el-container>
                    <el-header style="padding:0;">
                        <HeadNav on-toggleFold={ this.toggleFold }></HeadNav>
                    </el-header>
                    <el-main style="background:rgba(240,241,241,1);">
                        <router-view></router-view>
                    </el-main>
                </el-container>
            </el-container>
        )
    },
    methods:{
        toggleFold(param) {
            this.toggleCol = param;
        }
    }
}