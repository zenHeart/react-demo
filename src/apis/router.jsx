import React from 'react'
import { Link, Route, useRouteMatch } from 'react-router-dom'

import Nav from '../components/Nav'

import ReactRouter from './React/router'
import Render from './Render'
import PropsChildren from './PropsChildren'

function Routers () {
  let match = useRouteMatch()
  let config = {
    children: {
      react: ReactRouter,
      render: Render,
      'props-children': PropsChildren
    },
    parent: match.path
  }
  return <Nav {...config}></Nav>
}
export default Routers
