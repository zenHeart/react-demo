// 1. useCallback 函数重新创建，导致的冗余渲染
import React, {useCallback, useEffect, useState} from 'react'
import Mock from 'mockjs'
interface Todo {
  title: string,
  description: string,
  done: boolean
}
interface TodosInfo {
  name: string,
  todos: Todo[]
}
type GetTodos = (count: number) => Promise<TodosInfo>


function getTodoList(count: number, name: string) {
  return new Promise<TodosInfo>(res => {
    setTimeout(() => res(Mock.mock({
      name,
      [`todos|${count}`]: [
        {
          title: '@cword(1,5)',
          description: '@cword(10,20)',
          'done|1': [true, false]
        }
      ]
    })), 2e2)
  })
}

function Todos({getTodos}: {getTodos: GetTodos}) {
  let [todosInfo, setTodos] = useState({
    name: '',
    todos: []
  } as TodosInfo);

  useEffect(() => {
    getTodos(10).then(res => {
      console.log('res', res)
      setTodos(res)
    })
  }, [getTodos])

  return <div>
    <details>
      <summary><strong>{todosInfo.name}</strong></summary>
      {
        todosInfo.todos.map(el => (
          <div>
            <input type="checkbox" checked={el.done} disabled />
            <strong>{el.title}</strong>
            <strong>{el.description}</strong>
          </div>
        ))
      }
    </details>
  </div>
}


function Parent() {
  let [name, setName] = useState('tom')
  let [isDark, setDark] = useState(0)
  let style = {
    background: isDark ? 'black': 'white',
    color: isDark ? 'white': 'black',
  }
  const memCallback = useCallback((num) => getTodoList(num, name), [name])
  return <div style={style}>
    <button onClick={() => setDark(isDark^1)}>toggle dark</button>
    <input type="text" placeholder={`search ${name} todos`} value={name} onChange={e => setName(e.target.value)} />
    <Todos getTodos={(num) => getTodoList(num, name)}/>
    <hr />
    {/* 只有 name 变化是才会触发新的渲染，避免其他变量导致的非预期渲染 */}
    <Todos getTodos={memCallback}/>
  </div>
}

Parent.meta = {
  tags: ['hook', 'useCallback']
}
export default Parent