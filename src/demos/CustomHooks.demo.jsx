import React from 'react'
import Example from '../components/Example'
import Examples from '../components/Examples'

function ClassComponent () {
  return (
    <Examples text='利用 custom hooks 暴露封装状态处理,暴露内部状态'>
      <Example text='返回 state 暴露内部状态'>
        <GetKey />
      </Example>
    </Examples>
  )
}

ClassComponent.text = 'custom hooks'

function GetKey () {
  let key = CustomHooks()
  return <strong>{key}</strong>
}

function CustomHooks () {
  let [key, setKey] = React.useState(false)
  function keyPress (e) {
    console.log('key', e.code)
    setKey(e.code)
  }
  React.useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => {
      document.removeEventListener('keydown', keyPress)
    }
  })

  return key
}

export default ClassComponent
