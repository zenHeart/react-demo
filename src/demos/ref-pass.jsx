import React from 'react'

// 1. 子组件采用 React.forwardRef 将 ref 传递给 ref 参数
const C1 = React.forwardRef((props, ref) => {
  return <input ref={ref} />
})

// 2. 外层组价定义 ref 并引用组件
class App extends React.Component {
  constructor () {
    super()
    this.ref = React.createRef()
  }

  focus = () => {
    if (this.ref) {
      this.ref.current.focus()
    }
  }
  render () {
    return (
      <div>
        <button onClick={this.focus}>focus</button>
        <C1 ref={this.ref}></C1>
      </div>
    )
  }
}
export default App
