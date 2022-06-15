import React from 'react'
import { observable, computed, autorun } from 'mobx'
import { observer } from "mobx-react";

class Todo {
  @observable id = Date.now();
  @observable completed: boolean = false;
  @observable value: string = ''
  constructor(val: string) {
    this.value = val;
  }
}

class TodosStore {
  @observable todos: Todo[] = [];
  @observable filter: string = '';
  @computed get filterTodos() {
    let r = new RegExp(this.filter, 'i');
    return this.todos.filter(ele => r.test(ele.value))
  }
  push(val: string) {
    let todo = new Todo(val);
    this.todos.push(todo)
  }
}


let store = (window as any).store = new TodosStore();

// TODO: autorun 是否只观察 computed 属性
autorun(() => {
  console.log(store.filterTodos)
})

const TodoWithFilter = observer(() => {
  return (
    <ul>
      {store.todos.map(el => (<li key={el.id}>{el.value}</li>))}
    </ul>)
})
export default TodoWithFilter