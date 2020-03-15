import React from 'react'

import { NavLink, Route } from 'react-router-dom'

import './nav.scss'

function Nav ({ children, parent = '' }) {
  let childrenLinks = Object.keys(children)
  return (
    <div className='nav'>
      <nav>
        <ul>
          {childrenLinks.map(key => {
            return (
              <LinkItem
                key={`${parent}/${key}`}
                path={`${parent}/${key}`}
                text={children[key].text || key}
              ></LinkItem>
            )
          })}
        </ul>
      </nav>
      <div className='content'>
        {childrenLinks.map(key => {
          return (
            <Route
              key={key}
              path={`${parent}/${key}`}
              component={children[key]}
            />
          )
        })}
      </div>
    </div>
  )
}

function LinkItem ({ path, text = '' }) {
  return (
    <li>
      <NavLink activeClassName='active' to={`${path}`}>
        {text || path}
      </NavLink>
    </li>
  )
}

export default Nav
