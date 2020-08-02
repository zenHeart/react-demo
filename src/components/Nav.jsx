import React from 'react'

import { NavLink, Route } from 'react-router-dom'

import './nav.scss'

function formatComponent(component) {
  // html 组件使用 iframe
  if (typeof component === 'string') {
    debugger
    return <iframe srcDoc="<h1>hello</h1>" />
  } else {
    return component;
  }
}

function Nav({ children, parent = '' }) {

  return (
    <div className='nav'>
      <nav>
        <ul>
          {children.map(({ name }) => {
            return (
              <LinkItem
                key={`${parent}/${name}`}
                path={`${parent}/${name}`}
                text={name}
              ></LinkItem>
            )
          })}
        </ul>
      </nav>
      <div className='content'>
        {children.map(({ name, component }) => {
          return (
            <Route
              key={name}
              path={`${parent}/${name}`}
              component={formatComponent(component)}
            />
          )
        })}
      </div>
    </div>
  )
}

function LinkItem({ path, text = '' }) {
  return (
    <li>
      <NavLink activeClassName='active' to={`${path}`}>
        {text || path}
      </NavLink>
    </li>
  )
}

export default Nav
