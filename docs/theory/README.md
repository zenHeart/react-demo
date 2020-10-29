# 整体流程简述

1. react element
   1. 基础概念
   2. 为什么需要 vdom
   3. vdom 的基本结构
      1. type
      2. $$typeof
      3. props
      4. refs
      5. 其他
   4. vdom 类型
      1. host element 宿主元素处理
      2. function component
      3. class component
      4. jsx syntax sugar
   5. vdom 的创建，createElement
2. render 函数
   1. 不同类型 vdom 实例创建流程
      1. function component
      2. class component
   2. update 流程 `reconciler` 的 diff 机制
   3. 不同条件下 diff 详解
      1. setState
      2. forceUpdate
      3. key change
   4. reconciler 跨平台实现原理
3. acync render 产生的 fiber 架构，实现 incremental redner
   1. 暂停任务并恢复的机制
   2. 区分任务优先级
   3. 重用之前的工作
   4. 废除之前的工作
4. 其他细节


## 参考资料
* [async render 阶段 demo](https://gist.github.com/acdlite/f31becd03e2f5feb9b4b22267a58bc1f?fbclid=IwAR3pSSlGCCXqYhdEkGdl_l0zWEMFzap2mRkNbVmPeL7gIleevjKO13Nqw1k) 
* [fiber wiki](https://en.m.wikipedia.org/wiki/Fiber_(computer_science))

