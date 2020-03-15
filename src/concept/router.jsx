import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import Nav from '../components/Nav'

import FunctionComponent from './FunctionComponent'
import ClassComponent from './ClassComponent'
import ClassComponentState from './ClassComponentState'
import ClassComponentSetState from './ClassComponentSetState'
import ClassComponentEvent from './ClassComponentEvent'
import ClassComponentHooks from './ClassComponentHooks'

function Routers () {
  let match = useRouteMatch()
  let config = {
    children: {
      'function-component': FunctionComponent,
      'class-component': ClassComponent,
      'class-component-state': ClassComponentState,
      'class-component-setState': ClassComponentSetState,
      'class-component-event': ClassComponentEvent,
      'class-component-hooks': ClassComponentHooks
    },
    parent: match.path
  }
  return <Nav {...config}></Nav>
}
export default Routers
