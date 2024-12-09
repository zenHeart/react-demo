import React from 'react'

function PassRefFunction(props) {
  // 1. pass a function to the ref property
  return <input type='text' ref={props.getRef} />
}

class App extends React.Component {
  constructor() {
    super()
    this.input = null
  }
  // 2. the function will be called with the dom element, input parameter is the dom element
  getRef = el => {
    // 3. the function can set the ref value to the class component property
    this.input = el
  }
  focus = () => {
    if (this.input) {
      // 4. use the ref value to access the dom element
      this.input.focus()
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.focus}>focus</button>
        <PassRefFunction getRef={this.getRef}></PassRefFunction>
      </div>
    )
  }
}

App.meta = {
  tags: ['ref'],
};

export default App
