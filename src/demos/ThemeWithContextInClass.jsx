import React, { createContext } from 'react'
import Example from '../components/Example'
import Examples from '../components/Examples'
import './ThemeNoContext.scss'

// 1. createContext 创建 context
const Theme = createContext('dark')

// 2. 采用 contextType 绑定 context
class TodoButton extends React.Component {
  static contextType = Theme;
  render() {
    // 3. 类中使用 this.contenxt 访问变量
    return <button className={this.context}>{this.context}</button>
  }
}
function Todo() {
  return <p><TodoButton></TodoButton></p>
}
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      theme: 'light',
    }
  }
  changeTheme = (val) => {
    this.setState({
      theme: val,
    })
  }
  render() {
    return <div>
      <p>
        <button onClick={() => this.changeTheme('light')}>light</button>
        <button onClick={() => this.changeTheme('dark')}>dark</button>
      </p>
      {/* 4. 采用 .Provider 提供数据 */}
      <Theme.Provider value={this.state.theme} >
        <Todo></Todo>
      </Theme.Provider>
      <Todo></Todo>
    </div >
  }
}
export default () => <Example text="demo"><App></App></Example>