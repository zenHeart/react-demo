import React from 'react'

interface ChildrenProps {
  text: string
}
function Children({text}: ChildrenProps) {
  setTimeout(() => {
    console.log('trigger change text')
    // 该示例说明 props 的属性是 immutable 的
    text = 'new data'
  },2e3)
  return <h3>{text}</h3>
}
function Parent() {
  return <Children text="test"/>
}

Parent.meta = {
  tags: [
    'props'
  ]
}
export default Parent