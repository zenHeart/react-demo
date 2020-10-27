# 整体流程简述

1. vdom 生成，弄清楚 vdom 的类型和创建方法
2. vdom 的比对，弄清楚 `reconciler` 的 diff 机制
3. render 弄清楚 
   1. vdom -> 初始渲染的流程
   2. vdom 基于比对结果 ，update 的流程
4. incremental redner,弄清楚增量渲染的流程，如何控制渲染进度。
5. 更高层的 fiber 抽象，渲染调度器，实现如下逻辑  
   1. 暂停任务并恢复的机制
   2. 区分任务优先级
   3. 重用之前的工作
   4. 废除之前的工作


## 参考资料
* [fiber architecure](https://github.com/acdlite/react-fiber-architecture) 讲述了 fiber 整体设计理念
* [async render 阶段 demo](https://gist.github.com/acdlite/f31becd03e2f5feb9b4b22267a58bc1f?fbclid=IwAR3pSSlGCCXqYhdEkGdl_l0zWEMFzap2mRkNbVmPeL7gIleevjKO13Nqw1k) 
* [fiber wiki](https://en.m.wikipedia.org/wiki/Fiber_(computer_science))
* [facebook fiber 讨论原始资料](https://www.facebook.com/groups/2003630259862046/permalink/2054053404819731)
* [fiber 的原则 github issue](https://github.com/facebook/react/issues/7942)