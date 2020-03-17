import React, { createElement } from 'react'

function CreatElement () {
  return (
    <div>
      <h2>DomDiff 根节点不同直接替换</h2>
      <ul>
        <li>
          <h3>根节点不同会触发替换</h3>
          <DomDiffReplace />
        </li>
      </ul>
    </div>
  )
}
class DomDiffReplace extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      rootName: 'div'
    }
  }
  changeRoot = () => {
    this.setState(state => {
      return {
        rootName: state.rootName === 'div' ? 'section' : 'div'
      }
    })
  }
  render () {
    return (
      <div>
        <button onClick={this.changeRoot}>跟换节点</button>
        {createElement(this.state.rootName, null, <Children />)}
      </div>
    )
  }
}

class Children extends React.Component {
  static mountCount = 0
  componentWillMount () {
    console.group(`mount ${Children.mountCount}`)
    Children.mountCount++
    console.log('节点将挂载')
  }
  componentWillUnmount () {
    console.log('节点将卸载')
    console.groupEnd()
  }
  render () {
    return <p>{new Date().toLocaleTimeString()}: 子节点刷新</p>
  }
}

CreatElement.text = 'dom diff replace'

export default CreatElement
