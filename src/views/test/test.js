/*
 * @Company: JiangSu LangChuang
 * @Author: Lu YiMing
 * @Date: 2019-09-13 10:31:06
 * @LastAuthor: Lu YiMing
 * @lastTime: 2019-09-13 22:52:47
 * @FileUse: 文本文件用于
 */
import './test.scss';
import imgs from './7119492_114440620000_2.jpg'
import { Button } from 'element-ui'
const xxx = {
    a: {
        b: 3
    }
}
const x = xxx?.a?.c || 2;
const y = xxx?.a?.b || 2;
console.log('Button', Button)
export default {
    a: 1111,
    x,
    y
}