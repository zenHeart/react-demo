import React from 'react'
import './Examples.less'
interface ExamplesPros {
  text: string
}
function Examples (props: React.PropsWithChildren<ExamplesPros>) {
  return (
    <article className='Examples'>
      <h2>{props.text}</h2>
      <main>{props.children}</main>
    </article>
  )
}

export default Examples
