import React from 'react'
// 支持扩展属性覆盖
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
  return  <div>
      {/* 注意覆盖属性必须声明在扩展之后否则无效 */}
      {/* @ts-ignore */}
      <Children  title="override value"  {...childrenProps}></Children>
      {/* @ts-ignore */}
      <Children   {...childrenProps}  title="override value"></Children>
    </div>
}
Parent.meta = {
  tags: ['props']
}
export default Parent