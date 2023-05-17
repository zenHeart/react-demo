import { Profiler, useState } from 'react'

function counter() {
   const [count, setCount] = useState(0)

   return <div>
       {/* <Profiler id='1' onRender={(...args) => console.log(args)}> */}
      <button onClick={() => setCount(count+1)}>{count}</button>
      {/* </Profiler> */}
   </div>
}

function measureProfiler() {
   return  <Profiler id='0' onRender={(...args) => console.log(args)}>
      {counter()}
   </Profiler>
}


measureProfiler.meta = {
   tags: [
     'profiler',
   ]
}

 export default measureProfiler