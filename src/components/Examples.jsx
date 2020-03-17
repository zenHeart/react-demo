import React from 'react'
import './Examples.scss'

function Examples (props) {
  return (
    <article className='Examples'>
      <h2>{props.text}</h2>
      <main>{props.children}</main>
    </article>
  )
}

export default Examples
