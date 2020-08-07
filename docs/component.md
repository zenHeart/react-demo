# 组件类型

## portal 组件
1. 采用 `ReactDOM.createPortal` 创建 protal 组件
   1. 参数一为 component 节点
   2. 参数二为挂载节点
2. createPortal 的默认事件冒泡取决于组件申明位置而非实际挂载位置