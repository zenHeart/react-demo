import React,{ useState } from 'react'
import { NavLink, Route,Routes } from 'react-router-dom'
import Tags from './Tags'
import './nav.less'
import { isJsxFragment } from 'typescript'
import Bracket from '../demos/Bracket'
function formatComponent(component: any) {
  // html 组件使用 iframe
  if (typeof component === 'string') {
    // @ts-ignore
    return <iframe srcdoc={component}/>
  } else {
    return React.createElement(component)
  }
}

// @ts-ignore
function Nav({ children, parent = '',tagsColor }) {
  let [filterTag,setTag] = useState(new URLSearchParams(window.location.search).get("tag"));
  // @ts-ignore
  const handleTagChange = (tag) => {
      setTag(tag);
  }
  console.log('children', children)
  return (
    <div className='nav'>
      <nav>
        <ul>
          {/* @ts-ignore */}
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
        <Routes>
          { children.map(({ name, component }) => {
              return (
                <Route
                  key={name}
                  path={`${parent}/${name}`}
                  element={formatComponent(component)}
                />
              )
            })} 
        </Routes>
      </div>
    </div>
  )
}
// @ts-ignore
function LinkItem({ path, text = '',children }) {
  return (
    <li>
      {/* @ts-ignore  */}
      <NavLink activeClassName='active' to={`${path}`}>
        {text || path}  {children}
      </NavLink>
    </li>
  )
}

export default Nav
