# 浏览器示例

## 目标
采用类似 jquery 的方式理解 react 框架的基本使用


## 预备知识
1. 采用 `ReactDOM.render`  API 挂载元素
2. 采用 ` React.createElement` 来创建 DOM 
3. 继承 `React.Component` 创建组件
4. 组件
   1. `this.state` 保存组件内部状态
   2. `this.props` 引用外部传入属性
   3. `this.setState` 修改组件内部状态
   4. 实现 `render` 函数来返回 DOM,内层调用 `React.createElement` 函数

更基础的知识

1. es6 类语法
2. 数组常用方法
3. `render` 为抽象接口的实现机制
4. `createElement` 的实现方式
5. `strict` 模式


## 题目
> 使用 ol 实现一个排序列表

考察点:
1. createElement 的使用
2. key 值的作用及效果
3. array 的排序
4. ReactDOM.render 挂载方法
5. state 的状态管理

可能问题:
1. this 丢失

## 问题
1. `React.createElement` 不太方便定义复杂模板
2. 模板代码被函数拆分后没有直接申明结构直观,不好维护

> 基于此引出 JSX 语法。