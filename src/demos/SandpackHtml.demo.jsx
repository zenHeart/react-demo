import Sandpack from '@/components/Sandpack/index'

function SandpackDemoTest() {
  return <Sandpack template="vanilla">
    <pre>
      <code className="language-html">
        {`<script src="https://cdn.jsdelivr.net/npm/react/umd/react.development.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.development.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@babel/standalone"></script>

<div id="root"></div>
<script type="text/babel">
  const { createElement }  = React

  const Hello = (
    <h1>hello react!</h1>
  )
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(Hello)

</script>`}
      </code>
    </pre>
    <pre>
      <code className="language-css">
        {`body { 
          min-height: 120px; 
        }
        h1 { 
          color: blue; 
        }`}
      </code>
    </pre>
  </Sandpack>
}
SandpackDemoTest.meta = {
  disableSandpack: true
}

export default SandpackDemoTest