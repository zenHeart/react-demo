import { useState } from 'react'

function Log() {
  // 1. 使用解构使用状态
  const [count, setCount] = useState(() => 1);
  return <div>
    <p>{count}</p>
    {/* 2. 传递函数获取之前的状态值 */}
    <button onClick={() => setCount(prev => prev + 1)}>add</button>
    <button onClick={() => setCount(prev => prev - 1)}>minus</button>
  </div>

}

Log.meta = {
  tags: ['hook']
}

export default Log