import React from 'react'
import Example from '../components/Example'
import Examples from '../components/Examples'

function ClassComponent () {
  return (
    <Examples text='使用 UseState 创建 hooks'>
      <Example text='使用 useState'>
        <UseState />
      </Example>
      <Example text='函数组件可同时使用多个 useState'>
        <UseMultiState />
      </Example>
    </Examples>
  )
}

ClassComponent.text = 'useState 创建钩子'

function UseMultiState () {
  let [a, setA] = React.useState(0)
  let [b, setB] = React.useState({ a: 1, b: 2 })
  return (
    <div>
      <p>
        <span>{a}</span>
        <button onClick={() => setA(a + 1)}>add</button>
      </p>
      <p>
        <span>{JSON.stringify(b)}</span>
        <button onClick={() => setB({ a: b.a + 1, b: a + 1 })}>add</button>
      </p>
    </div>
  )
}
function UseState () {
  //1. 使用 useState 创建 hooks
  let [a, b] = React.useState(0)
  return (
    <div>
      {a}
      <button onClick={() => b(a + 1)}>add</button>
      <button onClick={() => b(0)}>reset</button>
    </div>
  )
}

export default ClassComponent
