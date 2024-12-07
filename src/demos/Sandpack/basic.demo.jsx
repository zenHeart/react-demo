import { Sandpack } from "@codesandbox/sandpack-react";

function App() {
  return (
    <Sandpack 
      template="react-ts"
      files={{
        "/App.tsx": {
          code: `
function add(a: number, b: number) {
  return a + b;
}

export default function App() {
  return <h1>Hello San12dpack { add(1,'2') } </h1>
}
`,
  hidden: false,
  active: true,
  readOnly: false, 
        } 
      }}
    />
  );
}

App.meta = {
  disableSandpack: true
}

export default App;