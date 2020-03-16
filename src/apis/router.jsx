import React from 'react'
import { Link, Route, useRouteMatch } from 'react-router-dom'

import Nav from '../components/Nav'

import ReactCreatElement from './ReactCreatElement'
import ReactCreatContext from './ReactCreatContext'
import Render from './Render'
import PropsChildren from './PropsChildren'

function Routers () {
  let match = useRouteMatch()
  let config = {
    children: {
      creatElement: ReactCreatElement,
      creatContext: ReactCreatContext,
      render: Render,
      'props-children': PropsChildren
    },
    parent: match.path
  }
  return <Nav {...config}></Nav>
}
export default Routers
