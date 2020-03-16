import React from 'react'

function CreatElement () {
  return (
    <div>
      <h2> React.CreatElement 创建 dom 节点</h2>
      <ul>
        <li>
          {React.createElement(
            'h1',
            { className: 'greeting' },
            'Hello, world!'
          )}
        </li>
      </ul>
    </div>
  )
}
CreatElement.text = 'React.createElement'

export default CreatElement
