import { createTagsColor, parserHtml } from './utils/utils'
import Sandpack from './components/Sandpack'
import React from 'react'

// Define component meta interface
interface ComponentMeta {
  tags?: string[];
  title?: string;
  description?: string;
  [key: string]: any;
}

// Define component with meta property
interface ComponentWithMeta extends React.FC {
  meta?: ComponentMeta;
}

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

interface Component {
  name: string;
  component: any;
  id: number;
  tags?: string[];
  [key: string]: any;
}

interface NestedComponent extends Omit<Component, 'name'> {
  name: string;
  children?: NestedComponent[];
}

// Define module type for Vite's import.meta.glob
interface ModuleType {
  [key: string]: ComponentWithMeta;
}

// Add helper function to flatten nested components
function flattenComponents(components: NestedComponent[]): Component[] {
  // @ts-ignore
  return components.reduce((acc: Component[], item) => {
    if (item.children) {
      return [...acc, ...flattenComponents(item.children)];
    }
    // Only include items with actual components (not folder items)
    if (item.component) {
      return [...acc, item];
    }
    return acc;
  }, []);
}

export function mountComponents() {
  let flatComponents: Component[] = [];

  // Type the glob imports
  const reactComponents: ModuleType = import.meta.glob('./demos/**/*.demo.{jsx,tsx}', {
    eager: true,
    query: { raw: true },
    import: 'default',
  }) as ModuleType;

  const reactComponentsRaw: Record<string, string> = import.meta.glob('./demos/**/*.demo.{jsx,tsx}', {
    eager: true,
    as: 'raw',
  });

  const htmlComponents: Record<string, string> = import.meta.glob('./demos/**/*.demo.html', {
    eager: true,
    as: 'raw'
  });

  const demos = {
    ...reactComponents,
    ...htmlComponents
  };

  const demosRaw = {
    ...reactComponentsRaw,
    ...htmlComponents
  };

  // First create flat structure
  Object.keys(demos).forEach((filename, index) => {
    const componentConfig = demos[filename];
    const rawContent = demosRaw[filename];
    const name = filename
      .replace(/^\.\/demos\//, '')
      .replace(/\.demo\.\w+$/, '');

    let component = componentConfig;
    let htmlInfo: ComponentMeta = {};

    if (filename.endsWith('.html')) {
      htmlInfo = parserHtml(component as string);
      flatComponents.push({
        name,
        component,
        ...htmlInfo,
        id: index
      });
    } else {
      // Access meta property directly from the component
      htmlInfo = (component as ComponentWithMeta).meta || {};
      const sandpackComponent = convertToSandpackFormat(rawContent, filename);

      flatComponents.push({
        name,
        component: sandpackComponent,
        ...htmlInfo,
        id: index
      });
    }
  });

  // Convert flat structure to nested
  function createNestedStructure(components: Component[]): NestedComponent[] {
    const root: { [key: string]: NestedComponent } = {};

    components.forEach(comp => {
      const pathParts = comp.name.split('/');

      if (pathParts.length === 1) {
        // No nesting needed
        root[comp.name] = { ...comp };
      } else {
        let currentLevel = root;
        const componentName = pathParts.pop()!; // Get the last part as component name

        // Create or traverse the path
        pathParts.forEach(part => {
          if (!currentLevel[part]) {
            currentLevel[part] = {
              name: part,
              children: [],
              id: -1 // Use -1 for folders
            };
          }
          if (!currentLevel[part].children) {
            currentLevel[part].children = [];
          }
          const nextLevel: { [key: string]: NestedComponent } = {};
          currentLevel[part].children!.forEach(child => {
            nextLevel[child.name] = child;
          });
          currentLevel = nextLevel;
        });

        // Add the component to the last level
        if (!currentLevel[componentName]) {
          const parentChildren = pathParts.reduce((acc, part) => {
            return root[part]?.children || acc;
          }, root[pathParts[0]]?.children || []);

          parentChildren.push({
            ...comp,
            name: componentName
          });
        }
      }
    });

    // Convert to array structure
    return Object.values(root).map(item => {
      if (item.children) {
        return {
          ...item,
          children: item.children.sort((a, b) => a.name.localeCompare(b.name))
        };
      }
      return item;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }

  return createNestedStructure(flatComponents);
}

export const COMPONENTS = mountComponents();
export const TAGS_COLOR = createTagsColor(flattenComponents(COMPONENTS));
