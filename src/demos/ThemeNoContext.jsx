import React from 'react'
import Example from '../components/Example'
import Examples from '../components/Examples'
import './ThemeNoContext.scss'



function TodoButton({ theme }) {
  return <button className={theme}>done</button>
}
function Todo({ theme }) {
  return <p>{theme} : <TodoButton theme={theme}></TodoButton></p>
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
      <Todo theme={this.state.theme}></Todo>
    </div>
  }
}
export default () => <Example text="demo"><App></App></Example>