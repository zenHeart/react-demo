import React,{ useState } from 'react'
import { NavLink, Route } from 'react-router-dom'
import Tags from './Tags'
import './nav.scss'

function formatComponent(component) {
  // html 组件使用 iframe
  if (typeof component === 'string') {
    return () =>  <iframe srcdoc={component}></iframe>
  } else {
    return component;
  }
}


function Nav({ children = [], parent = '',tagsColor }) {
  let [filterTag,setTag] = useState(new URLSearchParams(window.location.search).get("tag"));
  const handleTagChange = (tag) => {
      setTag(tag);
  }
  return (
    <div className='nav'>
      <nav>
        <ul>
          {children.filter(({tags}) => filterTag?(tags||[]).includes(filterTag):true)
          .map(({ name ,tags}) => {
            return (
            <LinkItem
                key={`${parent}/${name}`}
                path={`${parent}/${name}`}
                text={name}
              >
                <Tags onClickTag={handleTagChange} tagsColor={tagsColor} tags={tags}></Tags>
              </LinkItem>
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

function LinkItem({ path, text = '',children }) {
  return (
    <li>
      <NavLink activeClassName='active' to={`${path}`}>
        {text || path}  {children}
      </NavLink>
    </li>
  )
}

export default Nav
