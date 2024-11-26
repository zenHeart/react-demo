# how react vdom work



详细讲解 react vdom 到 元素创建的详细流程

## 基本流程
1. `vdom` 生成
2. `vdom` 转换为渲染函数
3. 渲染函数 update 详解

## 1. vdom 生成
### vdom 的基本结构
1. 参看示例 [creatElement](../../src/demos/api-creatElement.html) 创建 vdom 节点。返回结构如下,功能参考 [源码 ReactElement.js](https://github.com/facebook/react/blob/4e5d7faf54b38ebfc7a2dcadbd09a25d6f330ac0/packages/react/src/ReactElement.js#L146)
   ```js
   {
      // 框架内部属性 
      $$typeof:  Symbol(react.element), // 标识标签类型
      _owner: {},  // 元素职责
      _store: {}, // 元素存储

      // 属于元素的内建属性
      key: null, 
      props: {}, // 所有属性
      ref: null, // 引用
      type: "div" // 节点类型
   }
   ```


### DOM 树的表征
1. 为什么需要 key
2. 嵌套结构的创建
   
`props.children` 表征嵌套的树结构。


## 术语定义
参考 [官方文档](https://reactjs.org/docs/glossary.html)

### React Element
参考 
* [React (Virtual) DOM Terminology](https://gist.github.com/sebmarkbage/fcb1b6ab493b0c77d589#react-elements)
* [creating-a-reactelement](https://reactjs.org/blog/2014/10/14/introducing-react-elements.html#creating-a-reactelement)

`React.createElement(type, props[,childrens])`

### React Node
作为 `props.children` 的合法值节点类型
* ReactElement
* string -> ReactText
* number (aka ReactText)
* Array of ReactNodes  -> ReactFragment

### React Element factory
类型工厂，方便快速创建不同类型的 VDom，`React,createFactory(type)`

### React Components
扩展 DOM 的 react 组件节点，
1. 采用类语法 `extends React.Component`, `React.createClass` 15.4 废弃
2. 利用 `React.render = (ReactElement, HTMLElement | SVGElement) => ReactComponent` 创建

## 知识点
* ReactElement,参考 vdom <>
  * type 类型, 节点类型的区分
    * string 常规节点
    * 函数 -> 函数组件
    * 类 -> 类组件,类组价需要继承原因详解 <https://overreacted.io/how-does-react-tell-a-class-from-a-function/>
  * `$$typeof` 存在的原因，
    * <https://github.com/facebook/react/pull/4832>
    * [Why Do React Elements Have a $$typeof Property](https://overreacted.io/why-do-react-elements-have-typeof-property/)
  * ref 的作用，https://reactjs.org/docs/refs-and-the-dom.html
  * `props` 需要拷贝的原因，其他属性的意义，详见 <https://reactjs.org/blog/2015/02/24/streamlining-react-elements.html>


## 参考资料
* [React Components, Elements, and Instances](https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html#fnref-1) vdom 相关知识
* [react virtual dom](https://gist.github.com/sebmarkbage/fcb1b6ab493b0c77d589) 相关术语
* 设计理念
  * [原版](https://github.com/reactjs/react-basic)
  * [官方文档](https://reactjs.org/docs/design-principles.html)

* [ ] [diff 资料](https://github.com/facebook/react/issues/10703)
* [ ] [list diff](https://github.com/facebook/react/issues/10382)