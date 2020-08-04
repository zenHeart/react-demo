# 详细讲解 context 的使用

1. context 解决 props drilling 问题
2. context 的使用
   1. 使用 `createContenxt` 创建 context
      1. 默认值覆盖元素不属于提供 context 数据的子组件
   2. 祖先组件利用 `provider` 的 value 属性提供数据源
   3. 子孙组件消费方式
      1. 无状态组件使用 `cosumer` 消费数据
      2. 类组件使用 `static contextType` 绑定数据源
         1. 实例采用 `this.context` 消费数据
3. 高级用法
   1. 动态 contexta
      1. 通过外层传递事件句柄给子孙组件消费控制 context
   2. 多重 context 的消费策略
   3. 子孙组件对数据的修改策略
4. 