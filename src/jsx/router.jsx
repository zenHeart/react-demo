import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import Nav from '../components/Nav'

import Bracket from './Bracket'
import ConditionalRender from './ConditionalRender'
import ListRender from './ListRender'

function Routers () {
  let match = useRouteMatch()
  let config = {
    children: {
      bracket: Bracket,
      'conditional-render': ConditionalRender,
      'list-render': ListRender
    },
    parent: match.path
  }
  return <Nav {...config}></Nav>
}
export default Routers
