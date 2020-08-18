import React, { Component } from 'react'
import { observable} from 'mobx'
import { observer} from 'mobx-react'



@observer
class  App  extends Component  {
  store!:any
  constructor(props: any) {
    super(props);
     this.store = observable({
      count: 0
    })
  }
  static meta = {
    tags: [
      'mobx'
    ]
  }
  render() {
    return (
    <div>
      <button onClick={this.add}>add {this.store.count}</button>
      <button onClick={this.reset}>reset</button>
    </div>
    )
  }
  add = () => {
    this.store.count++
  }
  reset = () => {
    this.store.count = 0;
  }
}

export default App