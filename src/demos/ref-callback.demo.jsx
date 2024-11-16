import React from 'react'

function C1 (props) {
  return <input type='text' ref={props.getRef} />
}

class App extends React.Component {
  constructor () {
    super()
    this.input = null
  }
  getRef = el => {
    this.input = el
  }
  focus = () => {
    if (this.input) {
      this.input.focus()
    }
  }
  render () {
    return (
      <div>
        <button onClick={this.focus}>focus</button>
        <C1 getRef={this.getRef}></C1>
      </div>
    )
  }
}

export default App
