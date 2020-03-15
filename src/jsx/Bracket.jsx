import React from 'react'

function D1 () {
  return (
    <div>
      <h2> JSX 模板语法采用 {'{}'} 包裹表达式</h2>
      <ul>
        <li>
          {'{1 + 1}'} 解析为 {1 + 1}
        </li>
      </ul>
    </div>
  )
}
D1.text = '大括号包裹表达式'

export default D1
