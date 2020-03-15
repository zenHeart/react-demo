import React from 'react'
import { Link, Route, useRouteMatch } from 'react-router-dom'

import Bracket from './Bracket'
import Nav from '../components/Nav'

function Routers () {
  let match = useRouteMatch()
  let config = {
    children: { bracket: Bracket },
    parent: match.path
  }
  return <Nav {...config}></Nav>
}
export default Routers
