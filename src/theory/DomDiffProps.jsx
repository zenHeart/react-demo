import React, { createElement } from 'react'

function CreatElement () {
  return (
    <div>
      <h2>DomDiff 节点属性不同更新节点不触发替换</h2>
      <ul>
        <li>
          <h3>属性不同触发替换</h3>
          <DomDiffPropsUpdate />
        </li>
      </ul>
    </div>
  )
}
class DomDiffPropsUpdate extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      foo: 'a'
    }
  }
  updateProps = () => {
    this.setState(state => {
      return {
        foo: state.foo === 'foo' ? 'bar' : 'foo',
        [new Date().getTime().toString()]: Math.random()
      }
    })
  }
  render () {
    return (
      <div>
        <button onClick={this.updateProps}>更新属性</button>
        <Children {...this.state} />
      </div>
    )
  }
}

class Children extends React.Component {
  static mountCount = 0
  static update = 0
  componentWillMount () {
    console.group(`mount ${Children.mountCount}`)
    Children.mountCount++
    console.log('节点将挂载')
  }
  componentWillUnmount () {
    console.log('节点将卸载')
    console.groupEnd()
  }
  componentWillReceiveProps () {
    console.group(`update ${Children.update}`)
    Children.update++
    console.log('节点将接收属性')
  }
  componentWillUpdate () {
    console.log('节点将更新')
    console.groupEnd()
  }

  render () {
    return (
      <p>
        属性更新 {new Date().toLocaleTimeString()}: {JSON.stringify(this.props)}
      </p>
    )
  }
}

CreatElement.text = 'dom diff props'

export default CreatElement
