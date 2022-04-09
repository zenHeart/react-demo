import React from 'react'
import ReactDOM from 'react-dom'
import Modal from '../components/Modal.tsx'

function Portal () {
  return (
    <div>
      <h2>portal 实现特定节点挂载</h2>
      <ul>
        <li>
          <h3>选择特定节点挂载</h3>
          <ControlModal selector='#mount-modal' text='test'></ControlModal>
          <div id='mount-modal'></div>
        </li>
      </ul>
    </div>
  )
}

class ControlModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: props.init
    }
  }
  componentDidMount () {
    if (this.props.selector) {
      this.el = document.querySelector(this.props.selector)
    } else {
      this.el = document.body
    }
  }
  render () {
    let modal = (
      <Modal
        closeHandle={() =>
          this.setState({
            showModal: false
          })
        }
        text={this.props.text}
      ></Modal>
    )
    return (
      <div>
        {this.state.showModal && ReactDOM.createPortal(modal, this.el)}
        <button
          onClick={() =>
            this.setState({
              showModal: true
            })
          }
        >
          show
        </button>
      </div>
    )
  }
}

export default Portal
