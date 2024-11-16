import { createTagsColor, parserHtml } from './utils/utils'
import Sandpack from './components/Sandpack'

function convertToSandpackFormat(component: string, filename: string) {
  return function SandpackWrapper() {
    return (
      <Sandpack>
        <pre>
          <code className="language-js">
            {component}
          </code>
        </pre>
      </Sandpack>
    );
  }
}

export function mountComponents() {
  let components: unknown[] = []
  const reactComponents = import.meta.glob('./demos/**/*.demo.{jsx,tsx}', {
    eager: true, as: 'raw'
  })// Get raw content
  const htmlComponents = import.meta.glob('./demos/**/*.demo.html', { eager: true, as: 'raw' })

  const demos = {
    ...reactComponents,
    ...htmlComponents
  }
  Object.keys(demos).forEach((filename, index) => {
    const componentConfig = demos[filename]
    const name = filename.replace(/^\.\//, '').replace(/.\w+$/, '');
    // @ts-ignore
    const component = componentConfig.default || componentConfig;
    let htmlInfo = {};
    if (filename.endsWith('.html')) {
      htmlInfo = parserHtml(component);
    } else {
      const sandpackComponent = convertToSandpackFormat(component, filename);
      // @ts-ignore
      htmlInfo = component.meta || {};
      components.push({
        name,
        component: sandpackComponent,
        ...htmlInfo,
        id: index
      });
      return;
    }

    components.push({
      name,
      component,
      ...htmlInfo,
      id: index
    })
  })
  return components
}
export const COMPONENTS = mountComponents();
export const TAGS_COLOR = createTagsColor(COMPONENTS);
