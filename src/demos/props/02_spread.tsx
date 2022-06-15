import React from 'react'
// 利用 spread 实现 同时赋值多个属性
interface Info {
  title: string,
  description: string,
  style: React.CSSProperties
}
function Children({title, description, style}: Info) {
  return <details style={style}>
    <summary>{title}</summary>
       {description}
    </details>
}

function Parent() {
  const childrenProps = {
    title: 'test',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatum animi sequi necessitatibus eaque beatae doloremque neque? Magnam veritatis tempore fugit similique modi hic odio! Cum sint eaque inventore aspernatur?',
    style: {
      maxWidth: '300px'
    }
  }
  // 采用解构方式传递多个值
  return <Children {...childrenProps}></Children>
}
Parent.meta = {
  tags: ['props']
}
export default Parent