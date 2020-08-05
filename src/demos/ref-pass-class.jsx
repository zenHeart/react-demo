import React from 'react'

class A extends React.Component {
  render () {
    return <input type='text' ref={this.props.ref1} />
  }
}

const C1 = React.forwardRef((props, ref) => <A ref1={ref}></A>)
// 直接采用字符串模式定义引用
class App extends React.Component {
  focus = () => {
    if (this.refs.input) {
      this.refs.input.focus()
    }
  }
  render () {
    return (
      <div>
        <button onClick={this.focus}>focus</button>
        <C1 ref='input'></C1>
      </div>
    )
  }
}
export default App
