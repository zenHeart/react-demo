import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import Nav from '../components/Nav'

import Bracket from './Bracket'
import ConditionalRender from './ConditionalRender'
import ListRender from './ListRender'
import DotNotation from './DotNotation'
import Props from './Props'
import Children from './Children'

function Routers () {
  let match = useRouteMatch()
  let config = {
    children: {
      bracket: Bracket,
      'conditional-render': ConditionalRender,
      'list-render': ListRender,
      'dot-notation': DotNotation,
      props: Props,
      children: Children
    },
    parent: match.path
  }
  return <Nav {...config}></Nav>
}
export default Routers
