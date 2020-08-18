import * as mobx from 'mobx'
import {observer}  from 'mobx-react'
import React,{useState} from 'react'

// 确定初始状态
const INIT =  []

// 1. 定义状态
const todos = mobx.observable(INIT);
// 2. 定义衍化状态，从基础状态中变化出来
const totalCount = mobx.computed(() => todos.get().length);
const completedCount = mobx.computed(() => todos.get().filter(el => el.completed).length);

// 3. 定义 action 用来驱动状态
function addTodo(item) {
  todos.push(item)
  console.log(todos);
  console.log(totalCount);
  console.log(completedCount);
}
function deleteTodo(item) {
  let index = todos.findIndex(el => el.id === item.id)
  todos.splice(index,1)
}
function trigger(item,completed) {
  let index = todos.findIndex(el => el.id === item.id)
  todos[index].completed = completed
}
mobx.autorun(() => {
  console.log(todos);
  console.log(totalCount);
  console.log(completedCount);
})

//4. 定义消费的视图
function TodoApp() {
  return (
    <div>
      <div>
  <TodoInput onAdd={addTodo}></TodoInput>
  <span>total: <strong>{totalCount}</strong>,completed: <strong>{completedCount}</strong></span>
    </div>
    <div>
       {todos.map(el => (<Todo onRemove={deleteTodo} onTrigger={trigger} key={el.id} todo={el}></Todo>))}
    </div>
    </div>
  )

}
TodoApp.meta = {
  tags: ['mbox','concept']
}

function TodoInput({onAdd}) {
  const [val, setVal]  = useState('')
  const handleAdd = () => {
    let d = new Date();
    onAdd({
      id:  d.getTime(),
      time: d.toISOString(),
      content: val
    })
  }
  return (<>
    <input onChange={e => setVal(e.target.value)} value={val} type="text"/>
    <button onClick={handleAdd}>add</button>
  </>)

}

function Todo({todo,onRemove,onTrigger,onFinish}) {
  return (
    <div>
      <p>
  <strong>{todo.id}</strong>
  <time>{todo.time}</time>
  <button onClick={() => onRemove(todo)}>x</button>
  <input onChange={(e) => onTrigger(todo,e.target.checked) } type="checkbox" checked={todo.completed}/>
      </p>
  <p>{todo.content}</p>
    </div>
  )
}

export default observer(TodoApp)