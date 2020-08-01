
import React, { Component } from 'react'
import { observable, action } from 'mobx'
import { observer } from "mobx-react";


class Store {
  @observable count = 0;
  @action
  increment() {
    // 一步操作会丢失 this
      this.count++
  }
  @action.bound
  increment1() {
    // 确保 this 一直正确
    this.count++
  }
  constructor(count: number) {
    this.count = count;
  }
}



@observer
class Counter extends Component {
  props!: {
    store: Store
  }
  render() {
    return (
      <div>
        <button onClick={this.add}>add  no bound</button>
        <button onClick={this.add1}>add with bound</button>
        <p>{this.props.store.count}</p>
      </div>
    )
  }
  add = () => {
    let count = this.props.store.increment
    try {
      count();
    } catch(e) {
      console.error(e);
    }
    
  }
  add1 = () => {
    // 采用 bind 强制绑定,不会丢失 this
    let count = this.props.store.increment1
    count();
  }
}

export default function Action() {
  let store = new Store(0);
  return (
    <div>
      <Counter store={store}></Counter>
    </div>
  )
}