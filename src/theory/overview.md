# 整体流程预览

1. **render phase**
   1. 组件到 vdom
   2. reconciliation
2. **commit phase**
   1. convert to UI


rerender 触发条件
1. class
   1. this.setState
   2. this.forceUpdata
2. function 
   1. useState
   2. useReducer
3. other
   1. ReactDOM.render() like this.forceUpdate




## 参考资料
* [react render behavior](https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/)
* [ ] [Inside Fiber](https://indepth.dev/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react)
