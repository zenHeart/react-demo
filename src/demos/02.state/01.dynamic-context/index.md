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


1. 为什么 createContext 需要初始赋值,并且在 Context.provider 中还需要赋值
   > 初始赋值解决祖先元素未使用 provider 包裹的状态值
2. 如何修改 Context 的值 ?
   > 通过 provider 提供 state 值修改 context
3. 为什么类需要使用静态属性 contextType 显示绑定 context 才可使用 this.context 访问值
   > 这是类组件的绑定模式，为了使 react 查找到对应的 context 数据