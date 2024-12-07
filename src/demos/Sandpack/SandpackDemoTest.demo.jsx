import SandpackNew from '@/components/SandpackNew/index'

function SandpackDemoTest() {
  return <SandpackNew>
    <pre>
      <code className="language-js">
        {
          `
         import { getImageUrl } from './utils.js';
         import { Hello } from './hello.jsx';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
        <Hello/>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}

         `
        }
      </code>
    </pre>
    <pre>
      <code meta="src/hello.jsx" className="language-jsx">
        {
          "export function Hello() { return <h1>hello</h1> }"
        }
      </code>
    </pre>
    <pre>
      <code meta="src/utils.js" className="language-ts">
        {
          "export function getImageUrl(person, size = 's') {\n  return (\n    'https://i.imgur.com/' +\n    person.imageId +\n    size +\n    '.jpg'\n  );\n}\n"
        }
      </code>
    </pre>
    <pre>


      <code className="language-css">
        {
          "body { min-height: 120px; }\n.avatar { margin: 10px; border-radius: 50%; }\n"
        }
      </code>
    </pre>
  </SandpackNew>
}
SandpackDemoTest.meta = {
  disableSandpack: true
}

export default SandpackDemoTest