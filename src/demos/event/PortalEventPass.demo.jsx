import React,{useState} from 'react'
import ReactDOM from 'react-dom'

class  Portal extends React.Component {
  constructor() {
    super()
    this.el = document.createElement('div')
  }
  componentDidMount() {
       // TODO: 此变量 willunmount 为啥也可访问
       let modal = document.getElementById('modal')
       modal.appendChild(this.el)
  }
  render() {
    return (
      ReactDOM.createPortal(this.props.children,this.el)
    )
  }
}

function PortalButton() {
  const [count,setCount] = useState(0);
  const add = () => setCount(count+1)
  return (<>
    <h1>Protal 组件会修改事件冒泡,子元素的事件传递取决于组件申明时的位置，而非 dom 挂载的位置</h1>
    <div onClick={add}>
      <span>count:{count}</span>
      <Portal><button>count</button></Portal>
    </div>
    <div id="modal"></div>
    </>)
}

export default PortalButton