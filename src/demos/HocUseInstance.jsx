import React from 'react'
function HocBorder (props) {
  return (<div style={{
    border: `1px solid ${props.color}`
  }}>{props.children}</div>)
}
function UseHoc() {
  return (
  <>
      <HocBorder color='red'>
        <strong>test</strong>
      </HocBorder>
      <HocBorder  color='blue'>
        <p>test</p>
      </HocBorder>
   </>)
}

export default UseHoc

UseHoc.meta = {
  tags: [
    'hoc',
  ]
}