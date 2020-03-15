'use strict'

// jsx 可以是表达式
let expressJsx = <p>大括号内容解析为表达式 {1 + 2}</p>

function App (props) {
  return (
    <div>
      <h1>jsx</h1>
      {expressJsx}
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
