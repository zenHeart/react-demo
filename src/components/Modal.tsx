import React from 'react'
import './Modal.less'
interface ModalProps {
  text: string
  closeHandle: React.MouseEventHandler<HTMLSpanElement>
}
function Modal (props: React.PropsWithChildren<ModalProps>) {
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
