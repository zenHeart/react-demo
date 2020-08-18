import React, {useState} from 'react'

export default class TodoApp extends React.Component {
  static meta = {
    tags: ['mbox','concept']
  }
  constructor() {
    super()
    this.state = {
      todos: []
    };
  }
  addTodo = (item) => {
    this.state.todos.push(item);
    this.setState({
      todos:this.state.todos
    })
    console.log('----', item, this.state.todos);
  }
  removeTodo = (item) => {
    let itemIndex = this.state.todos.findIndex((el) => el.id === item.id)
    this.state.todos.splice(itemIndex,1)
    this.setState({
      todos: this.state.todos
    })
  }
  render() {
    return (
      <div>
        <TodoInput onAdd={this.addTodo}></TodoInput>
        <div>
          {this.state.todos.map((todo,index) => <Todo todo={todo} key={todo.id} onDelete={this.removeTodo} {...todo}></Todo>)}
        </div>
      </div>
    )
  }
}
function Todo({todo,onDelete}) {
  return (
    <div>
      <p>
        <strong>{todo.id}</strong>
        <time>{todo.time}</time><button onClick={() => onDelete(todo)} >X</button>
      </p>
      <p>{todo.content}</p>

    </div>

  )
}
function TodoInput({onAdd}) {
  let [val,setVal] = useState('')
  function handleChange(e) {
    setVal(e.target.value);
  }
  function handleKeyDown(e) {
    if(e.key === 'Enter' && val) {
      handleAdd()
    }
  }

  function handleAdd() {
    let d = new Date();
    onAdd({
      content: val,
      time: d.toLocaleString(),
      id: d.getTime()
    })
  }

  return (
    <div>
    <input onKeyDown={handleKeyDown} type="text" value={val} onChange={handleChange}/>
    <button onClick={handleAdd}>add</button>
  </div>)
}