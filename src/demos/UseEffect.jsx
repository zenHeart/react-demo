import React from 'react'
import Example from '../components/Example'
import Examples from '../components/Examples'

function ClassComponent () {
  return (
    <Examples text='使用 UseEffect 处理组件事件'>
      <Example text='基本使用'>
        <UseEffect />
      </Example>
      <Example text='可以使用多个 useEffect'>
        <UseMultiEffect />
      </Example>
      <Example text='返回函数实现卸载操作'>
        <UseEffectClean />
      </Example>
    </Examples>
  )
}

ClassComponent.text = 'UseEffect 触发事件'

function UseEffectClean () {
  let [start, setStart] = React.useState(0)
  let [count, setCount] = React.useState(0)

  React.useEffect(() => {
    let timerId = setInterval(() => {
      if (start) {
        setCount(count + 1)
      }
    }, 1000)
    return clearInterval.bind(this, timerId)
  })
  return (
    <div>
      {count}
      <p>
        <button onClick={() => setStart(1)}>start</button>
        <button onClick={() => setStart(0)}>stop</button>
        <button onClick={() => setCount(0)}>reset</button>
      </p>
    </div>
  )
}

function UseEffect () {
  let [start, setStart] = React.useState(0)
  // 组件属性挂载都会触发此钩子
  React.useEffect(() => {
    console.log('start revers:', start)
  })

  return (
    <div>
      <p>
        <span>{JSON.stringify(start)}</span>
        <button onClick={() => setStart(start ^ 1)}>trigger</button>
      </p>
    </div>
  )
}

function UseMultiEffect () {
  let [start, setStart] = React.useState(0)
  // 组件属性挂载都会触发此钩子
  React.useEffect(() => {
    console.log('start revers:', start)
  })
  // 组件属性挂载都会触发此钩子
  React.useEffect(() => {
    console.log('send service revers:', start)
  })

  return (
    <div>
      <p>
        <span>{JSON.stringify(start)}</span>
        <button onClick={() => setStart(start ^ 1)}>trigger</button>
      </p>
    </div>
  )
}

export default ClassComponent
