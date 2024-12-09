import React from 'react'

function HookUseRef(props) {
  // 1. define a ref variable
  const ref = React.useRef()
  const focus = () => {
    if (ref) {
      // 3. use the ref value to access the dom element
      ref.current.focus()
    }
  }
  return (
    <div>
      <button onClick={focus}>focus</button>
      // 2. bind the ref variable to the dom element ref property
      <input type='text' ref={ref} />
    </div>
  )
}

HookUseRef.meta = {
  tags: ['ref'],
};

export default HookUseRef
