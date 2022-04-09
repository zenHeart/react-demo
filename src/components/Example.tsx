import './Example.less'
import React from 'react'
interface ExampleProps {
  text: string,

}
function Example (props: React.PropsWithChildren<ExampleProps>) {
  return (
    <section className='Example'>
      <h3>{props.text}</h3>
      {props.children}
    </section>
  )
}

export default Example
