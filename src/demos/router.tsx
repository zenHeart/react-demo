import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import Nav from '../components/Nav'
import HelloWorld from './HelloWorld'

function Routers() {
  let match = useRouteMatch()
  let config = {
    children: {
      HelloWorld,
    },
    parent: match.path
  }
  return <Nav {...config}></Nav>
}
export default Routers
