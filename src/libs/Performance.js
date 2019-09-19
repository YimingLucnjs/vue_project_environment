/**
 * use Performance optimizing function
 */

export class Performance {
    constructor() {

    }
}

/**
 * 防抖函数
 * @param { Function } fn 延迟执行函数
 * @param { Number} delay 延迟时间
 */
export function debounce(fn, delay) {
    let timer = null //借助闭包
    return function () {
        if (timer) clearTimeout(timer);
        timer = setTimeout(fn, delay) // 简化写法
    }
}

/**
 * 节流函数
 * @param { Function } fn 延迟执行函数
 * @param { Number} delay 每次延迟时间
 */
export function throttle(fn, delay) {
    let valid = true
    return function () {
        if (!valid) return false;
        valid = false
        setTimeout(() => {
            fn()
            valid = true;
        }, delay)
    }
}