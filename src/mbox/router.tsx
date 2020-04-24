import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import Nav from '../components/Nav'
import TimerView from './TimerView'

function Routers() {
  let match = useRouteMatch()
  let config = {
    children: {
      TimerView
    },
    parent: match.path
  }
  return <Nav {...config}></Nav>
}
export default Routers
