import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.input = React.createRef();
  }
  focus = () => {
    console.log('----', this.input.current)
    this.input.current.focus()
  }
  render() {
    return (
      <div>
        <button onClick={this.focus}>focus</button>
        <input type="text" ref={this.input} />
      </div>
    )
  }
}
export default App;