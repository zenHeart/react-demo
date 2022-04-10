import { useState } from 'react'

function Log() {
  const [todos, toggleDone] = useState([
    {label: 'todo1', done: false},
    {label: 'todo2', done: false},
    {label: 'todo3', done: false},
  ]);
  function handleChange(index: number, e: React.ChangeEvent<HTMLInputElement>) {
    // 1. 浅拷贝对象
    const newTodos = [...todos];
    // 2. 修改对象
    newTodos[index].done = e.target.checked ? true : false
    // 3. 修改后赋值新对象
    toggleDone(newTodos);
  }
  return <div>
      {
        todos.map((el, index) =>(
          <div>
            <input  type="checkbox" checked={el.done} onChange={ (e) => handleChange(index, e)}/>
            <span>{el.label} {el.done ? `done ${new Date()}`: `undone ${new Date()}`}</span>
          </div>
        ))
      }
  </div>

}

Log.meta = {
  tags: ['hook']
}

export default Log