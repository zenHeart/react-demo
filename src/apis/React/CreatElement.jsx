import React from 'react'
import Examples from '../../components/Examples'
import Example from '../../components/Example'

function CreatElement () {
  return (
    <Examples text='React.CreatElement 创建 dom 节点'>
      <Example text='第一个属性设置标签'>{React.createElement('hr')}</Example>
      <Example text='第二个属性设置标签属性,采用 children 传入子节点'>
        {React.createElement('div', {
          style: {
            width: '100px',
            height: '100px',
            background: 'gray',
            textAlign: 'center'
          },
          children: ['text', <strong key='12'>demo</strong>]
        })}
      </Example>
      <Example text='也可在第三个参数及后续参数,传入子节点,支持数组格式,注意数组传入的子组件需要添加 key'>
        {React.createElement(
          'div',
          {
            style: {
              width: '100px',
              height: '100px',
              background: 'gray',
              textAlign: 'center'
            }
          },
          'text',
          <span>demo</span>,
          [<p key='1'>1</p>, <p key='2'>2</p>]
        )}
      </Example>
    </Examples>
  )
}

CreatElement.text = 'React.createElement'

export default CreatElement
