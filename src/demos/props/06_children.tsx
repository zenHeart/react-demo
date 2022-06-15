import React from 'react'
interface Info {
  title: string
}
function Child({children, title}: React.PropsWithChildren<Info>) {
  return <details>
    <summary>{title}</summary>
    {/* children 作为默认的插槽，类似 vue defaultSlot */}
    {children}
  </details>
}

function Parent() {
  return <Child title="custom children">
    <h3>pass component a children</h3>
  </Child>
}

Parent.meta = {
  tags: ['props']
}
export default Parent