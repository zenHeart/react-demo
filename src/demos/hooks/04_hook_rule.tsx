import { useState } from 'react'
function HookRule() {
  const val = {count: 0}
  setTimeout(() => {
    let [count, setCount] = useState(0)
    setTimeout(() => setCount(10), 1e3)
  }, 2e3)

  return <p>{val.count}</p>
}

HookRule.meta = {
  tags: ['hook']
}

export default HookRule