/**
 * 参考 https://github.com/facebook/react/blob/4e5d7faf54b38ebfc7a2dcadbd09a25d6f330ac0/packages/react/src/ReactElement.js#L348 
 * 1. 创建 vdom 函数
 * */ 
function createVDom(type, config, ...children) {
  if(typeof element !== 'string') {
    throw new Error('element type is invalid')
  }

  let props  =Object.assign({} , config)
  
  if(children.length) {
    props.children = children
  }

  return {
    type,
    props,
  }
}

function vDomToDOM(vdom) {
  // 1. 创建根节点

  // 2. 遍历属性添加

  // 3. 添加子元素
  appenChild

}

/**
 * 参考 https://github.com/facebook/react/blob/4e5d7faf54b38ebfc7a2dcadbd09a25d6f330ac0/packages/react-dom/src/client/ReactDOMLegacy.js#L287
 * 创建 dom
 **/ 

function render(vnode, container, cb) {
  // 1. 判断合法的容器节点

  // 2. 渲染元素



}

/**
* 判断节点是否合法
*/
function isValidContainer(node) {
  return !!(
    node &&
    (node.nodeType === Node.ELEMENT_NODE ||
      node.nodeType === Node.DOCUMENT_NODE ||
      node.nodeType === Node.DOCUMENT_FRAGMENT_NODE ||
      (node.nodeType === Node.COMMENT_NODE && node.nodeValue === 'react-mount-point-unstable')
    )
  )
}