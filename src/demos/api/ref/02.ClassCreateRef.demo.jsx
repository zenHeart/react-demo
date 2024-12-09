import React from 'react'

class ClassCreateRef extends React.Component {
  constructor() {
    super();
    //1.  use createRef to create a ref variable
    this.input = React.createRef();
  }
  focus = () => {
    console.log('----', this.input.current)
    // 3. use ref variable current property is the dom element
    this.input.current.focus()
  }
  render() {
    return (
      <div>
        <button onClick={this.focus}>focus</button>
        //2. bind the ref variable to the dom element ref property
        <input type="text" ref={this.input} />
      </div>
    )
  }
}

ClassCreateRef.meta = {
  tags: ['ref'],
};

export default ClassCreateRef;
