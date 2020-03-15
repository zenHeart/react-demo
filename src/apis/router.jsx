import React from 'react'
import { Link, Route, useRouteMatch } from 'react-router-dom'

import Nav from '../components/Nav'

import CreatElement from './CreatElement'
import Render from './Render'

function Routers () {
  let match = useRouteMatch()
  let config = {
    children: { creatElement: CreatElement, render: Render },
    parent: match.path
  }
  return <Nav {...config}></Nav>
}
export default Routers
