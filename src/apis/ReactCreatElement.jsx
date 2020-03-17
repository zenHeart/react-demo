import React from 'react'
let mountCount = 0
class Children extends React.Component {
  componentWillMount () {
    console.group(`mount ${mountCount}`)
    console.log('节点将挂载')
  }
  componentWillUnmount () {
    console.log('节点将卸载')
    console.groupEnd()
    mountCount++
  }
  render () {
    return <p>{new Date().toLocaleTimeString()}: 子节点刷新</p>
  }
}
function CreatElement () {
  return (
    <div>
      <h2> React.CreatElement 创建 dom 节点</h2>
      <ul>
        <li>
          <h3>采用常量</h3>
          {React.createElement(
            'h1',
            { className: 'greeting' },
            'Hello, world!'
          )}
        </li>
        <li>
          <h3>采用变量设置第一个参数</h3>
          {createWithVariable('div', <Children />)}
        </li>
      </ul>
    </div>
  )
}

function createWithVariable (root, children) {
  return React.createElement('root', null, children)
}
CreatElement.text = 'React.createElement'

export default CreatElement
