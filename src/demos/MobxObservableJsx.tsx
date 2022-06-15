import React, { Component } from 'react'
import { observable  } from 'mobx'
import { observer  } from 'mobx-react'


class Store {
  @observable count  = 0
}


const App = observer(function App(props: any) {
  return (
    <div>
      <button onClick={ props.add }>add {props.store}</button>
    </div>
  )
})
function C1() {
  // TODO: 为什么 mobx 无法在函数组件内部申明和使用
  let store = new Store();
  function add() {
    store.count++
    console.log(store.count)
  }
  return <App add={add}> store={store}</App>
}

C1.meta = {
  tags: [ 'mobx' ]
}

export default  C1