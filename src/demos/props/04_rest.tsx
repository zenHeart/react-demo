import React, { ButtonHTMLAttributes } from 'react'
// 使用剩余参数，保值组件的默认属性
interface Info {
  name: string,
}
function Children({name, ...restButtonProps}: ButtonHTMLAttributes<Info>) {
  // 利用剩余参数保留组件原有属性的透传，类似 vue $attrs
  return <button {...restButtonProps}>{ name }</button>
}

function Parent() {
  return  <div>
      <Children name="test" disabled></Children>
    </div>
}
Parent.meta = {
  tags: ['props']
}
export default Parent