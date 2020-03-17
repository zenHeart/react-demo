import React from 'react'
import './Modal.scss'
function Modal (props) {
  return (
    <div className='Modal'>
      <div className='content'>
        <span className='close' onClick={props.closeHandle}>
          X
        </span>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default Modal
