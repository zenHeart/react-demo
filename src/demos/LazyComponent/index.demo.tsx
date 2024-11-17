import React, { Suspense } from 'react'
// const HelloWorld = React.lazy(() => import('./HelloWorld'))
import HelloWorld from './HelloWorld'

function ClassComponent() {
  return (
    <div>
      <h2>采用类编写组价</h2>
      <ul>
        <li>
          <h2>这是异步组件,点击触发加载</h2>
          <ul>
            <li>1. 采用 React.lazy 引入组件,只能用于默认导出模块</li>
            <li>2. 在 Suspense 使用组件</li>
            <li>3. 在 Suspense callback 绑定占位组件</li>
          </ul>
          <ShowAsync></ShowAsync>
        </li>
      </ul>
    </div>
  )
}

class ShowAsync extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }
  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              show: true
            })
          }
        >
          show hello world
        </button>
        <Suspense fallback={<div>loading...</div>}>
          {this.state.show ? <HelloWorld></HelloWorld> : null}
        </Suspense>
      </div>
    )
  }
}

ClassComponent.text = '懒加载组件'

export default ClassComponent
