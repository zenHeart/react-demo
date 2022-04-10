import {useReducer} from 'react'

// 1. 定义初始化状态
const InitValue = 0
// 2. 定义重置函数
function int() {
  return InitValue
}

// 3. 定义状态的派生函数
enum ActionType {
  ADD,
  MINUS,
  REST
}
function reducer(state: number, action: ActionType) {
  switch(action) {
    case ActionType.ADD:
      return state + 1
    case ActionType.MINUS:
      return state - 1
    case ActionType.REST:
      return InitValue 
    default:
      throw new Error(`no this action: ${action}`)
  }

}

function Counter() {
  let [count, dispatch] = useReducer(reducer, InitValue, int)
  return (
    <div>
      <h3>{ count }</h3>
      <div>
        <button onClick={() => dispatch(ActionType.ADD)}>add</button>
        <button onClick={() => dispatch(ActionType.MINUS)}>minus</button>
        <button onClick={() => dispatch(ActionType.REST)}>reset</button>
      </div>
    </div>
  )
}

Counter.meta = {
  tags: ['hook']
}
export default Counter