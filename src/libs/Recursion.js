import {
  Queue,
  Stack,
} from './DataStructure';
const queue = new Queue();

/**
 * 关于树结构的递归处理
 * @Recursion Class
 *     （1）breadthFirstFind 广度 优先遍历
 *              @param： { Object }
 *                  tree         { Array default []}
 *                          --- 树的数据
 *                  childrenKey  { String/(Function return childNodes) default 'children' }
 *                          --- 支持自定义树的分支key，默认子集存放于children
 *                          --- 如果子集存放于多层keyv中，可以传入function，function的参数为当前节点，任意方式取值，返回继续递归的数组即可
 *                  resultArr    { Array default [] }
 *                          --- 不需要传递
 *                  callback     { Function default ()=>{} }
 *                      callback有两个参数
 *                          --- 1.树的当前节点
 *                          --- 2.树的父级节点
 *                          @return 会将返回值push到数组中作为整个递归的返回
 *                                  如果返回值是一个对象并存在isStop true属性，则会完全停止下面的递归
 *     （2）deepFirstFind 深度 优先遍历
 *
 * */

export class Recursion {
  constructor(){

  }
  //广度 优先遍历
  breadthFirstFind(
    {
      tree = [],
      childrenKey = 'children',
      resultArr = [],
      callback = () => {}
    }
  ){
    let i = 0, item = tree[i];
    while ( item ){
      queue.enqueue( item )
      i++;
      item = tree[i];
    }
    while (queue.size() > 0){
      let ite = queue.dequeue();
      // 获取callback中返回的每一项；
      let resultItem = callback( ite ) || {};
      resultArr.push(resultItem);
      // callback返回时提供一个isStop属性用于终止遍历；
      if( resultItem.isStop === 'stop') return queue.clear();
      // childrenKey 默认是string 如果是func，则将当前项作为参数放入func中处理；
      if( typeof childrenKey === 'string' ){
        if( ite[childrenKey] && ite[childrenKey].length > 0 ){
          queue.enqueue( ite[childrenKey] )
        }
      }else if( typeof childrenKey === 'function' ){
        if( childrenKey(ite) && childrenKey(ite).length > 0 ){
          queue.enqueue( childrenKey(ite) )
        }
      }

    }
    return resultArr
  }
  // 深度优先遍历
  deepFirstFind(
    {
      tree = [],
      childrenKey = 'children',
      resultArr = [],
      callback = () => {},
      stratDeep = true,
      parentNode = null,
    }
  ){
    let i = 0, item = tree[i], stopR = true;
    while ( item && stopR !== false ){
      let resultItem = callback( item, parentNode, i ) || {};
      if( resultItem.isStop === 'stop') {
        resultArr.push(resultItem.value);
        return stratDeep ? resultArr : false;
      }else{
        resultArr.push(resultItem);
      }
      // childrenKey 默认是string 如果是func，则将当前项作为参数放入func中处理；
      if( typeof childrenKey === 'string' ){
        if( item[childrenKey] && item[childrenKey].length > 0 ){
          stopR = this.deepFirstFind( { tree: item[childrenKey], childrenKey, resultArr, callback , parentNode:item} )
        }
      }else if( typeof childrenKey === 'function' ){
        if( childrenKey(item) && childrenKey(item).length > 0 ){
          stopR = this.deepFirstFind( { tree: childrenKey(item), childrenKey, resultArr, callback, parentNode:item } )
        }
      }
      i++;
      item = tree[i];
    }
    if( stopR === false && !stratDeep ) return false;
    return resultArr;
  }
  // 树的新增 支持单个节点多个节点的新增
  treeAddNodes(
    {
      tree = [],
      childrenKey = 'children',
      callback = () => {},
      stratDeep = true,
      parentNode = null,
    },
    type = 'deep', // 递归新增的方式 --- deep/breadth
  ){
    const defaultParams = {
      tree,
      childrenKey,
      callback
    }
    if( type === 'deep' ){
      this.deepFirstFind()
    }else if( type === 'breadth') {
      this.breadthFirstFind()
    }
  }

}
