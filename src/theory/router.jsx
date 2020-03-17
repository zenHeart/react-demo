import React from 'react'
import { useRouteMatch } from 'react-router-dom'

import Nav from '../components/Nav'

import DomDiffReplace from './DomDiffReplace'
import DomDiffProps from './DomDiffProps'
import DomDiffWithoutKey from './DomDiffWithoutKey'
import DomDiffKey from './DomDiffKey'

function Routers () {
  let match = useRouteMatch()
  let config = {
    children: {
      'dom-diff-replace': DomDiffReplace,
      'dom-diff-props': DomDiffProps,
      'dom-diff-without-key': DomDiffWithoutKey,
      'dom-diff-key': DomDiffKey
    },
    parent: match.path
  }
  return <Nav {...config}></Nav>
}
export default Routers
