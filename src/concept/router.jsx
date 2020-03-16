import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import Nav from '../components/Nav'

import FunctionComponent from './FunctionComponent'
import ClassComponent from './ClassComponent'
import ClassComponentState from './ClassComponentState'
import ClassComponentSetState from './ClassComponentSetState'
import ClassComponentEvent from './ClassComponentEvent'
import ClassComponentHooks from './ClassComponentHooks'
import Form from './Form'
import FormTextarea from './FormTextarea'
import FormSelect from './FormSelect'
import FormMultiple from './FormMultiple'
import FormDisable from './FormDisable'
import PropsSlot from './PropsSlot'
import LazyComponent from './LazyComponent'
import ErrorBoundaries from './ErrorBoundaries'
import Fragment from './Fragment'

function Routers () {
  let match = useRouteMatch()
  let config = {
    children: {
      'function-component': FunctionComponent,
      'class-component': ClassComponent,
      'class-component-state': ClassComponentState,
      'class-component-setState': ClassComponentSetState,
      'class-component-event': ClassComponentEvent,
      'class-component-hooks': ClassComponentHooks,
      form: Form,
      'form-textarea': FormTextarea,
      'form-select': FormSelect,
      'form-multiple': FormMultiple,
      'form-disable': FormDisable,
      'props-slot': PropsSlot,
      'lazy-component': LazyComponent,
      'error-boundaries': ErrorBoundaries,
      fragment: Fragment
    },
    parent: match.path
  }
  return <Nav {...config}></Nav>
}
export default Routers
