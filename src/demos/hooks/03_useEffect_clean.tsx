
import { useState, useEffect } from 'react'
function NetStatus() {

  let [netStatus, setNetStatus] = useState('');
  function handleNetChange(e:Event) {
    setNetStatus(e.type);
  }

  useEffect(() => {
    window.addEventListener('offline', handleNetChange);
    window.addEventListener('online', handleNetChange);
    return () => {
      // 组件
      console.log('trigger unmounted')
      window.removeEventListener('offline', handleNetChange);
      window.removeEventListener('online', handleNetChange);
    }
  })

  return <h3>网络状态: { netStatus }</h3>
}



function UseNet() {
  let [use, setUse] = useState(true);
  function toggleShow() {
    setUse(!use)
  }
  return <div>
    { use ? <NetStatus/>: null}
    { <button onClick={toggleShow}>toggle</button>}
  </div>
}


UseNet.meta = {
  tags: [
    'hook',
  ]
}

export default UseNet