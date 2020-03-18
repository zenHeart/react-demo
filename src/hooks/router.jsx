import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import Nav from '../components/Nav'

import UseState from './UseState'
import UseEffect from './UseEffect'
import CustomHooks from './CustomHooks'

function Routers () {
  let match = useRouteMatch()
  let config = {
    children: {
      'state-hooks': UseState,
      'life-hooks': UseEffect,
      'custom-hooks': CustomHooks
    },
    parent: match.path
  }
  return <Nav {...config}></Nav>
}
export default Routers
