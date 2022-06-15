import React, { ButtonHTMLAttributes } from 'react'
// 使用剩余参数，保值组件的默认属性
interface Info {
  header: React.ReactNode,
  content: React.ReactNode
}
function Children({header, content}: Info) {
  // 利用剩余参数保留组件原有属性的透传，类似 vue $attrs
  return <details> 
    <summary>{header} </summary>
    {content}
  </details>
}

function Parent() {
  return  <div>
      <Children header={<i>header</i> } content={<h3>content data info</h3>}></Children>
    </div>
}
Parent.meta = {
  tags: ['props']
}
export default Parent