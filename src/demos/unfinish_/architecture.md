# 概览
react 如何解决 UI 问题的

1. 从 `v = f(d)` 开始，核心概念
2. 组件模型的抽象
   1. component 的类型


3. react element
   1. 基础概念
   2. 为什么需要 vdom
   3. vdom 的基本结构
      1. type
      2. $$typeof
      3. props
      4. refs
      5. 其他
   4. vdom 核心属性详解,参考 https://gist.github.com/sebmarkbage/fcb1b6ab493b0c77d589
      1. type 的类型
         1. host element 宿主元素处理
         2. function component
         3. class component
         4.  jsx syntax sugar
      2. props 的核心属性
         1. children 的类型
            1. root element
            2. type 类型
            3. 文本
            4. fragment
   5. vdom 的创建
      1. createElement
      2. createFactory
      3. jsx 语法糖
      4. createClass 和 React.component, 
4. render 函数
   1. 不同类型 vdom 实例创建流程
      1. function component
      2. class component
   2. update 流程 `reconciler` 的 diff 机制
   3. 不同条件下 diff 详解
      1. setState
      2. forceUpdate
      3. key change
   4. reconciler 跨平台实现原理
5. acync render 产生的 fiber 架构，实现 incremental redner
   1. 暂停任务并恢复的机制
   2. 区分任务优先级
   3. 重用之前的工作
   4. 废除之前的工作
6. 其他细节


## 参考资料
* [async render 阶段 demo](https://gist.github.com/acdlite/f31becd03e2f5feb9b4b22267a58bc1f?fbclid=IwAR3pSSlGCCXqYhdEkGdl_l0zWEMFzap2mRkNbVmPeL7gIleevjKO13Nqw1k) 
* [fiber wiki](https://en.m.wikipedia.org/wiki/Fiber_(computer_science))
* [递归函数断点技巧](https://twitter.com/dan_abramov/status/699397675326795776)
  * 采用 `group,groupEnd` 实现
