import React from 'react'

function C1 (props) {
  const ref = React.useRef()
  const focus = () => {
    if (ref) {
      ref.current.focus()
    }
  }
  return (
    <div>
      <button onClick={focus}>focus</button>
      <input type='text' ref={ref} />
    </div>
  )
}

export default () => <C1></C1>
