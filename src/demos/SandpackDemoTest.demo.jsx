import Sandpack from '../components/Sandpack/index'

function SandpackDemoTest() {
  return <Sandpack>
    <pre>
      <code className="language-js">
        {
          "import { getImageUrl } from './utils.js';\n\nfunction Avatar({ person, size }) {\n  return (\n    <img\n      className=\"avatar\"\n      src={getImageUrl(person)}\n      alt={person.name}\n      width={size}\n      height={size}\n    />\n  );\n}\n\nexport default function Profile() {\n  return (\n    <div>\n      <Avatar\n        size={100}\n        person={{ \n          name: 'Katsuko Saruhashi', \n          imageId: 'YfeOqp2'\n        }}\n      />\n      <Avatar\n        size={80}\n        person={{\n          name: 'Aklilu Lemma', \n          imageId: 'OKS67lh'\n        }}\n      />\n      <Avatar\n        size={50}\n        person={{ \n          name: 'Lin Lanying',\n          imageId: '1bX5QH6'\n        }}\n      />\n    </div>\n  );\n}\n"
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