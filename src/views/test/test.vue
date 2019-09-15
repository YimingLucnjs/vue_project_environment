<!--
 * @Company: JiangSu LangChuang
 * @Author: Lu YiMing
 * @Date: 2019-09-14 17:59:13
 * @LastAuthor: Lu YiMing
 * @lastTime: 2019-09-15 18:41:33
 * @FileUse: 文本文件用于
 -->
<template>
    <div :class="className.bbb">
        {{a}}
        
        <div :class="className.a">
            221213
        </div>
        <div class="dd">
        323212
        </div>
    </div>
    
</template>

<script>
    import aa from './test.scss';
    export default {
        name: 'testtemp',
        data() { 
            return {
                a: 231231231312,
                className: aa,
            }
        }
    }
</script>

