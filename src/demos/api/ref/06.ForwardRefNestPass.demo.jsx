import React from 'react'

class A extends React.Component {
  render() {
    // 3. use the ref1 property to access the dom element
    return <input type='text' ref={this.props.ref1} />
  }
}

// 1. use React.forwardRef wrap the component to pass the ref property
const C1 = React.forwardRef((props, ref) => <A ref1={ref}></A>)

class App extends React.Component {
  focus = () => {
    if (this.refs.input) {
      // 4. use the ref value to access the bind dom element
      this.refs.input.focus()
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.focus}>focus</button>
        // 2. bind the ref variable to the dom element ref property
        <C1 ref='input'></C1>
      </div>
    )
  }
}

App.meta = {
  tags: ['ref'],
};

export default App
