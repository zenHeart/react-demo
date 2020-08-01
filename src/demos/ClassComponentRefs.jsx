import React from 'react'
import Example from '../components/Example'
import Examples from '../components/Examples'

function ClassComponent () {
  return (
    <Examples text='采用 reference 索引元素'>
      <Example
        text='类中使用索引'
        step={[
          '1. 使用 React.createRef 创建索引',
          '2. 使用 ref 在元素上绑定索引',
          '3. 在 dom 生成后使用 current 使用索引'
        ]}
      >
        <C1></C1>
      </Example>
      <Example text='外层类也可引用类中方法'>
        <C2></C2>
      </Example>
      <Example text='函数组件中也可使用, 使用 React.useRef 创建'>
        <RefFunc />
      </Example>
      <Example text='采用回调函数获取 refs'>
        <RefCallback />
      </Example>
      <Example text='结合回调模式,采用 props 让父组件获取内部子组件 ref'>
        <RefCallbackParent />
      </Example>
    </Examples>
  )
}
function RefCallbackParent () {
  let ref
  function Children (props) {
    return <input type='text' ref={props.inputRef} />
  }
  return (
    <div>
      <button onClick={() => ref.focus()}>点击 focus</button>
      <Children inputRef={el => (ref = el)}> </Children>
    </div>
  )
}

function RefCallback () {
  let input
  return (
    <div>
      <button onClick={() => input.focus()}>点击 focus</button>
      <input type='text' ref={el => (input = el)} />
    </div>
  )
}

function RefFunc () {
  const input = React.useRef()

  return (
    <div>
      <button onClick={() => input.current.focus()}>点击 focus</button>
      <input type='text' ref={input} />
    </div>
  )
}

class C1 extends React.Component {
  constructor (props) {
    super(props)
    this.input = React.createRef()
  }
  reset () {
    this.input.current.value = null
  }

  render () {
    return (
      <div>
        <button onClick={() => this.input.current.focus()}>
          点击触发 focus input
        </button>
        <input type='text' ref={this.input} />
      </div>
    )
  }
}

class C2 extends React.Component {
  constructor (props) {
    super(props)
    this.input = React.createRef()
  }
  render () {
    return (
      <div>
        <button
          onClick={() => {
            console.log('parent', this.input.current)
            console.log('children', this.input.current.input.current)
            this.input.current.reset()
            setTimeout(() => {
              // 深层次引用内部索引,
              this.input.current.input.current.value = 'initial'
            }, 2000)
          }}
        >
          复位
        </button>
        <C1 ref={this.input}></C1>
      </div>
    )
  }
}

ClassComponent.text = '类组件 reference'

export default ClassComponent
