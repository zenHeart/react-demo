import {useEffect, useState} from 'react'

function useNetStatus() {
  const [netStatus, setNet] = useState('');
  function changeNet(e: Event) {
    setNet(e.type)
  }

  useEffect(() => {
    window.addEventListener('online',changeNet)
    window.addEventListener('offline',changeNet)

    return () => {
      window.removeEventListener('online',changeNet)
      window.removeEventListener('offline',changeNet)
    }
  })

  return netStatus;
}

function CustomerHook() {
  const netStatus = useNetStatus();
  return <p>网络状态: {netStatus}</p> 
}

CustomerHook.meta = {
  tags: ['hook']
}
export default CustomerHook;