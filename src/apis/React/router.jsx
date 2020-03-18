import React from 'react'
import { useRouteMatch } from 'react-router-dom'

import Nav from '../../components/Nav'

import CreatElement from './CreatElement'
import CreatContext from './CreatContext'

function Routers () {
  let match = useRouteMatch()
  let config = {
    children: {
      creatElement: CreatElement,
      creatContext: CreatContext
    },
    parent: match.path
  }
  return <Nav {...config}></Nav>
}
Routers.text = 'React'
export default Routers
