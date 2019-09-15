/**
 * Created by luyiming on 2019-08-21
 * 数据结构
 */
// 栈
export const Stack = (function(){
  let sym = Symbol();
  return class {
    constructor(){
      //用来存储栈的数据
      this[sym] = [];
    }
    //添加数据  push
    push(ele){
      this[sym].push(ele);
    }
    //取出并删除数据  pop
    pop(){
      return this[sym].pop();
    }
    //返回栈顶数据 peek
    peek(){
      return this[sym][this[sym].length-1];
    }
    //清空栈   clear
    clear(){
      this[sym] = [];
    }
    //返回栈中数据长度  size
    size(){
      return this[sym].length;
    }
  }
})();

// 队列
export const Queue = (function(){
  let symbol = Symbol();
  return class{
    constructor(){
      this[symbol] = [];
    }
    //入队
    enqueue(ele){
      if(ele instanceof Array){
        this[symbol].push(...ele);
      }else{
        this[symbol].push(ele);
      }
    }
    //出队
    dequeue(){
      return this[symbol].shift();
    }
    //返回列首数据，但不删除  first
    first(){
      return this[symbol][0];
    }
    //清空  clear
    clear(){
      this[symbol] = [];
    }
    //长度  size
    size(){
      return this[symbol].length;
    }
    //按顺序输出队列数据 print
    print(){
      while (this.size())
        console.log( this.dequeue() );
    }
  }
})();
