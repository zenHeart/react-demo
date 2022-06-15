import React, {useState} from 'react'
type RenderProps = {
  children(options: React.ReactNode): React.ReactNode;
 };

function Child({children}: RenderProps) {
  let [count, setCount] = useState(0)


  return <div>
    {children(count)} 
    <button onClick={() => setCount(++count)}>add</button>
  </div>

}

function Parent() {
  return <Child>
    {count => <h1>{count}</h1>}
  </Child>
}
Parent.meta = {
  tags: ['props', 'render']
}
export default Parent