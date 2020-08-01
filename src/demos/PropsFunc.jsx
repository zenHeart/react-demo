import React from 'react'
import Example from '../components/Example'
import Examples from '../components/Examples'

C.text = 'props 为回调函数'
function C () {
  return (
    <Examples>
      <Example text='通过回调模式将组件内部状态暴露给父组件'>
        <Parent></Parent>
      </Example>
    </Examples>
  )
}
class Parent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      x: 0,
      y: 0
    }
  }

  render () {
    return (
      <>
        <MouseMove
          handle={e => {
            this.setState({
              x: e.clientX,
              y: e.clientY
            })
          }}
        ></MouseMove>
        <span>{JSON.stringify(this.state)}</span>
      </>
    )
  }
}

function MouseMove (props) {
  return (
    <div
      style={{
        height: '100px',
        width: '100px',
        background: 'gray'
      }}
      onMouseMove={e => props.handle(e)}
    ></div>
  )
}

export default C
