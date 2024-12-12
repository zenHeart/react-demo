# mobx 
**详细讲解 mobx 使用**

----

## 原理概述
mbox 设计理念为, **所有从应用状态衍生出来的状态都应该自动派生**，基于此
衍生出了如下的变化模型。


mobx 的学习重点就是围绕
1. 如何定义响应式状态
2. 如何消费状态
3. 如何修改状态

组织的,这也是官方文档的组织方式。

## 问题
1. 为什么直接遍历 store 的 keys 为空?
  ```js
  // 该操作会返回空数组
  Object.keys(store)
  ```