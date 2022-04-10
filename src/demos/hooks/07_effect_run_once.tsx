import {useState, useEffect} from 'react'

function useCounter() {
  let [count, setCount] = useState(0)

  // useEffect 第二个参数不传参，只在 mount 的时候才挂载
  useEffect(() => {
    console.log(`count: ${count}`);
  }, [])

  return (
    <div>
      <button onClick={() => setCount(++count)}>{count}</button>
    </div>
  )
}

useCounter.meta = {
  tags: ['hook']
}
export default useCounter