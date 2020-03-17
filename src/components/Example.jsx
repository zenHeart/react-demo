import React from 'react'

import './Example.scss'
function Example (props) {
  return (
    <section className='Example'>
      <h3>{props.text}</h3>
      {props.children}
    </section>
  )
}

export default Example
