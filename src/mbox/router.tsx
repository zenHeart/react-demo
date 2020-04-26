import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import Nav from '../components/Nav'
import TimerView from './TimerView'
import TodoListView from './TodoList';

function Routers() {
  let match = useRouteMatch()
  let config = {
    children: {
      TimerView,
      TodoListView
    },
    parent: match.path
  }
  return <Nav {...config}></Nav>
}
export default Routers
