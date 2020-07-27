import React from 'react'
import { useRouteMatch } from 'react-router-dom'

import Nav from '../components/Nav'

import TimerView from './TimerView'
import TodoListView from './TodoList';
import TodoWithFilter from './TodoWithFilter';
import Observable from './Observable';
import Action from './Action';


function Routers() {
  let match = useRouteMatch()
  let config = {
    children: {
      TimerView,
      TodoListView,
      TodoWithFilter,
      Observable,
      Action
    },
    parent: match.path
  }
  return <Nav {...config}></Nav>
}
export default Routers
