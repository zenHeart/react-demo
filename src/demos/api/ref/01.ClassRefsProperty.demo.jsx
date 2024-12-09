import React from 'react'

// 直接采用字符串模式定义引用
class ClassRefsProperty extends React.Component {
  focus = () => {
    if (this.refs.input) {
      // 2. this.$refs.<ref name> is the dom element
      this.refs.input.focus()
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.focus}>focus</button>
        {/* 1. use ref property to define a ref value is ref name */}
        <input ref='input'></input>
      </div>
    )
  }
}

ClassRefsProperty.meta = {
  tags: ['ref'],
};

export default ClassRefsProperty
