# mobx 
**详细讲解 mobx 使用**

----


## 问题
1. 为什么直接遍历 store 的 keys 为空?
  ```js
  // 该操作会返回空数组
  Object.keys(store)
  ```