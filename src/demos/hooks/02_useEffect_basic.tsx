
// 1. 引用 useEffect 作为组件更新的 hooks
import { useState, useEffect } from 'react'
function BasicHook() {

  let [count, setCount] = useState(0);

  // 2. 挂载组件更新的回调
  useEffect(() => {
    // 3. 每次渲染都会触发重新执行，包括首次
    document.title = `${count}`
  })


  return <button onClick={() => setCount(++count)}>{count}</button>
}

BasicHook.meta = {
  tags: [
    'hook',
  ]
}


export default BasicHook