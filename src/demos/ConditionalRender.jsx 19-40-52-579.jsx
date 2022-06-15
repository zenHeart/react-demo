import React from 'react'
import { render } from '@testing-library/react'

function D1 () {
  return (
    <div>
      <ul>
        <li>
          <RenderWithIf reverse={false}></RenderWithIf>
        </li>
        <li>
          <RenderWithTernary reverse={false}></RenderWithTernary>
        </li>
        <li>
          <RenderWithLogic reverse={false}></RenderWithLogic>
        </li>
      </ul>
    </div>
  )
}
class RenderWithIf extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      reverse: props.reverse
    }
  }
  reverse = () => {
    this.setState((state, props) => {
      return {
        reverse: state.reverse ^ 1
      }
    })
  }
  reverseRender () {
    if (this.state.reverse) {
      return <span>yes</span>
    } else {
      return <span>no</span>
    }
  }
  render () {
    return (
      <div>
        <h3>采用 if else 控制渲染结果 </h3>
        <button onClick={this.reverse}>reverse</button>
        {this.reverseRender()}
      </div>
    )
  }
}
class RenderWithTernary extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      reverse: props.reverse
    }
  }
  reverse = () => {
    this.setState((state, props) => {
      return {
        reverse: state.reverse ^ 1
      }
    })
  }
  reverseRender () {
    return this.state.reverse ? <span>yes</span> : <span>no</span>
  }
  render () {
    return (
      <div>
        <h3>采用三元运算符控制渲染结果 </h3>
        <button onClick={this.reverse}>reverse</button>
        {this.reverseRender()}
      </div>
    )
  }
}
class RenderWithLogic extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      reverse: props.reverse
    }
  }
  reverse = () => {
    this.setState((state, props) => {
      return {
        reverse: state.reverse ^ 1
      }
    })
  }
  reverseRender () {
    // 采用导通运算,null 控制不返回内容
    return (this.state.reverse || null) && <span>显示</span>
  }
  render () {
    return (
      <div>
        <h3>采用 && 控制条件渲染 </h3>
        <button onClick={this.reverse}>reverse</button>
        {this.reverseRender()}
      </div>
    )
  }
}

D1.text = '条件渲染'

export default D1
