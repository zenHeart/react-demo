import Sandpack from '@/components/Sandpack/index'

function SandpackDemoTest() {
  return <Sandpack template="vanilla">
    <pre>
      <code className="language-html">
        {`<!DOCTYPE html>
        <html>
          <head><title>Demo</title></head>
          <body>
            <h1>Hello World</h1>
            <script src="src/script.js"></script>
            <link rel="stylesheet" href="styles.css">
          </body>
        </html>`}
      </code>
    </pre>
    <pre>
      <code meta="src/script.js" className="language-js">
        {`console.log('Hello from JavaScript!');`}
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