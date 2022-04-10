import {useState, useEffect} from 'react'

function useCounter() {
  let [count, setCount] = useState(0)
  let [count1, setCount1] = useState(0)

  // useEffect 第二个参数确定观测哪几个值
  useEffect(() => {
    console.log(`count: ${count}, count1: ${count1}`);
  }, [count])

  return (
    <div>
      <button onClick={() => setCount(++count)}>{count}</button>
      <button  onClick={() => setCount1(++count1)}>{count1}</button>
    </div>
  )
}

useCounter.meta = {
  tags: ['hook']
}
export default useCounter