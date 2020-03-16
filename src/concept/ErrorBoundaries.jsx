import React from 'react'

function ClassComponent () {
  return (
    <div>
      <h2>申明错误组件捕获错误</h2>
      <ul>
        <li>
          <h3>
            错误组件配置 getDerivedStateFromError, componentDidCatch 钩子使用
          </h3>
          <ul>
            <li>1. 无法捕获回调事件中的错误</li>
          </ul>
          <ErrorBoundaries fallback={<strong>---错误信息---</strong>}>
            <BugComponent />
          </ErrorBoundaries>
        </li>
      </ul>
    </div>
  )
}

class BugComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: false
    }
  }
  render () {
    if (this.state.error) {
      throw new Error('触发错误')
    }
    return (
      <button
        onClick={() =>
          this.setState({
            error: true
          })
        }
      >
        点击触发错误
      </button>
    )
  }
}

class ErrorBoundaries extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch (error, errorInfo) {
    // 处理错误信息
    this.setState({
      hasError: true
    })
  }
  render () {
    if (this.state.hasError) {
      // 显示错误组件
      return this.props.fallback || <span style={{ color: 'red' }}>error</span>
    }
    // 正常显示
    return this.props.children
  }
}

ClassComponent.text = 'Error Boundaries 处理错误'

export default ClassComponent
