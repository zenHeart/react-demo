import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable, computed } from "mobx";

class Todo {
  id = Math.random();
  @observable title: string;
  @observable finished = false;
  constructor(title: string) {
    this.title = title;
  }
}

// 1. 创建被观察的状态数组
class TodoList {
  @observable todos: Todo[] = [];
  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length
  }
}

//2. 创建被观察的组件
@observer
class TodoListView extends Component {
  props!: {
    todoList: TodoList;
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.todoList.todos.map((todo => (
            <TodoView todo={todo} key={todo.id}></TodoView>
          )))}
        </ul>
        Tasks left: {this.props.todoList.unfinishedTodoCount}
      </div>)
  }
}

// 观察组价状态
const TodoView = observer(({ todo }: { todo: Todo }) => (
  <li>
    <input
      type="checkbox"
      checked={todo.finished}
      onClick={() => (todo.finished = !todo.finished)}
    />
    {todo.title}
  </li>
))

function Todos(lists: Todo[]) {
  let store = new TodoList();
  store.todos = lists
  return <TodoListView todoList={store} />
}

export default function ShowList() {
  return (
    <div>
      {Todos(Array.from({ length: 10 }).map((ele, index) => (new Todo(`test ${index}`))))}
      {Todos(Array.from({ length: 10 }).map((ele, index) => (new Todo(`demo ${index}`))))}
    </div>)
}
