import Sandpack from '../components/Sandpack/index'

function SandpackDemoTest() {
  return <Sandpack>
    <pre>
      <code className="language-js">
        {
          `
         import { getImageUrl } from './utils.js';

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
      <code meta="src/utils.js" className="language-js">
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

  </Sandpack>
}

export default SandpackDemoTest