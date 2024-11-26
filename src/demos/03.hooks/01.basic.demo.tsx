// 1. 引用 useState 
import { useState } from 'react'

function BasicHook() {
  // 2. 使用数组解构 useState 返回值
  // 3 useState 的入参传入初始值
  let [count, setCount] = useState(0);

  // 4. 使用 setCount 修改 count 的值，setCount 的入参为修改后的值
  // 5. 消费 count 字段返回当前状态
  return <button onClick={() => setCount(++count)}>{count}</button>
}

BasicHook.meta = {
  tags: [
    'hook',
  ]
}


export default BasicHook