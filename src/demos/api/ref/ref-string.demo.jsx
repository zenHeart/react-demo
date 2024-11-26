import React from 'react'

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
        <input ref='input'></input>
      </div>
    )
  }
}
export default App
