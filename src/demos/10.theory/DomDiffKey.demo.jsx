import React, { createElement } from 'react'

function CreatElement () {
  return (
    <div>
      <h2>循环组件的替换规则</h2>
      <ul>
        <li>
          <h3>即使不带 key 节点相同只进行属性更新不替换节点</h3>
          <DomDiff />
        </li>
      </ul>
    </div>
  )
}
class DomDiff extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      before: false,
      after: false
    }
  }
  componentDidMount () {
    this._el = document.querySelector('#diff-mount')
  }
  render () {
    return (
      <div>
        <button
          onClick={() =>
            this.setState(state => {
              return {
                before: state.before ? null : true
              }
            })
          }
        >
          节点之前插入
        </button>
        <button
          onClick={() =>
            this.setState(state => {
              return {
                after: state.after ? null : true
              }
            })
          }
        >
          节点之后插入
        </button>
        <div>
          {this.state.before && <Children key='1' />}
          <Children key='2' />
          <Children key='3' />
          {this.state.after && <Children key='4' />}
        </div>
      </div>
    )
  }
}

class Children extends React.Component {
  static ID = 0
  constructor (props) {
    super(props)
    this._id = Children.ID++
  }
  componentWillMount () {
    console.groupEnd()
    console.group(`mount ${this._id}`)
    console.log(`节点将挂载 ${this._id}`)
  }
  componentWillUnmount () {
    console.log(`节点将卸载 ${this._id}`)
    console.groupEnd()
  }
  componentWillReceiveProps () {
    console.log(`节点将接收属性 ${this._id} `)
  }
  componentWillUpdate () {
    console.log(`节点将更新 ${this._id} `)
  }

  render () {
    return (
      <p>
        属性更新 {new Date().toLocaleTimeString()}:{this._id}
      </p>
    )
  }
}

CreatElement.text = 'dom diff  key'

export default CreatElement
