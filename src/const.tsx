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


function extractLocalImports(code: string): string[] {
  // Remove single-line comments
  const noSingleLineComments = code.replace(/\/\/.*/g, '');

  // Remove multi-line comments
  const noComments = noSingleLineComments.replace(/\/\*[\s\S]*?\*\//g, '');

  // Match only relative imports (starting with ./ or ../)
  const importRegex = /import\s+(?:[^"']*\s+from\s+)?["'](\.\.?\/[^"']+)["']/g;
  const imports: string[] = [];
  let match;

  while ((match = importRegex.exec(noComments)) !== null) {
    imports.push(match[1]);
  }

  return [...new Set(imports)]; // Remove duplicates
}

// Create a map of all demo-related files
function createRawFilesMap(demosRaw: Record<string, string>): Record<string, string> {
  const rawFilesMap: Record<string, string> = {};

  // First, get all demo files and their directories
  const demoDirs = new Set<string>();
  Object.keys(demosRaw).forEach(path => {
    const dir = path.substring(0, path.lastIndexOf('/'));
    demoDirs.add(dir);
  });

  // Then import all files from these directories
  const allFiles = import.meta.glob(
    ['./demos/**/*.{js,jsx,tsx,ts}'],
    { eager: true, as: 'raw' }
  );

  // Normalize paths and add to map
  Object.entries(allFiles).forEach(([path, content]) => {
    const normalizedPath = path.replace(/^\.\/demos\//, '');
    rawFilesMap[normalizedPath] = content as string;
  });

  return rawFilesMap;
}

function resolveFilePath(relativePath: string, currentFilePath: string): string {
  // Get the directory of the current file
  const currentDir = currentFilePath.substring(0, currentFilePath.lastIndexOf('/'));

  // Handle relative paths
  if (relativePath.startsWith('./')) {
    relativePath = relativePath.slice(2);
  } else if (relativePath.startsWith('../')) {
    // Go up one directory level
    return `${currentDir.substring(0, currentDir.lastIndexOf('/'))}/${relativePath.slice(3)}`;
  }

  return `${currentDir}/${relativePath}`;
}

function findMatchingFile(resolvedPath: string, rawFilesMap: Record<string, string>): string | undefined {
  // Get all available file paths from rawFilesMap
  const availablePaths = Object.keys(rawFilesMap);

  // Try different extensions
  const possibleExtensions = ['', '.tsx', '.jsx', '.js', '.ts'];

  // Find a matching file path
  return availablePaths.find(filePath => {
    return possibleExtensions.some(ext => {
      const pathToCheck = resolvedPath + ext;
      return pathToCheck.includes(filePath);
    });
  });
}

function parseMultiFileContent(
  componentString: string,
  filename: string,
  rawFilesMap: Record<string, string>
): Record<string, string> {
  const files: Record<string, string> = {};
  files['App.js'] = componentString;

  const imports = extractLocalImports(componentString);
  if (filename.includes('LazyComponent')) {
    debugger
  }

  imports.forEach(importPath => {
    const resolvedPath = resolveFilePath(importPath, filename);

    // Find matching file in rawFilesMap
    const foundFile = findMatchingFile(resolvedPath, rawFilesMap);

    if (foundFile && rawFilesMap[foundFile]) {
      const foundContent = rawFilesMap[foundFile];

      // Clean up the imported file content
      let cleanedCode = foundContent
        .replace(/import\s+.*?\n/g, '')
        .replace(/export\s+default\s+/, '')
        .trim();

      // Add proper export
      files[`${importPath}.tsx`] = cleanedCode.startsWith('function') || cleanedCode.startsWith('class')
        ? `export default ${cleanedCode}`
        : `export default function Component() {
            return (${cleanedCode})
          }`;

      // Process nested imports
      const nestedFiles = parseMultiFileContent(foundContent, foundFile, rawFilesMap);
      Object.entries(nestedFiles).forEach(([path, code]) => {
        if (path !== 'App.js') {
          files[path] = code;
        }
      });
    } else {
      console.warn(`Could not find file for import: ${importPath} (resolved to ${resolvedPath})`);
    }
  });

  return files;
}

export function mountComponents() {
  let flatComponents: Component[] = [];

  const demos = import.meta.glob('./demos/**/*.demo.{jsx,tsx}', {
    eager: true,
    query: { raw: true },
    import: 'default'
  });

  const demosRaw = import.meta.glob('./demos/**/*.demo.{jsx,tsx}', {
    eager: true,
    as: 'raw'
  });

  // Create raw files map once
  const rawFilesMap = createRawFilesMap(demosRaw);

  // Process components
  Object.keys(demos).forEach((filename, index) => {
    const componentConfig = demos[filename];
    const rawContent = demosRaw[filename];
    const name = filename
      .replace(/^\.\/demos\//, '')
      .replace(/\.demo\.\w+$/, '');

    let component = componentConfig;
    let htmlInfo = {};

    if (filename.endsWith('.html')) {
      htmlInfo = parserHtml(component as string);
      flatComponents.push({
        name,
        component,
        ...htmlInfo,
        id: index
      });
    } else {
      htmlInfo = (component as ComponentWithMeta).meta || {};
      const sandpackComponent = convertToSandpackFormat(rawContent, filename, rawFilesMap);

      flatComponents.push({
        name,
        component: sandpackComponent,
        ...htmlInfo,
        id: index
      });
    }
  });

  return createNestedStructure(flatComponents);
}

function convertToSandpackFormat(
  component: string,
  filename: string,
  rawFilesMap: Record<string, string>
) {
  // Parse files
  const files = parseMultiFileContent(component, filename, rawFilesMap);

  return function SandpackWrapper() {
    return (
      <Sandpack>
        {Object.entries(files).map(([path, code]) => (
          <pre key={path}>
            <code
              className="language-js"
              meta={path !== 'App.js' ? path : undefined}
              {...({} as CodeProps)}
            >
              {code}
            </code>
          </pre>
        ))}
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

interface NestedComponent extends Component {
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

function createNestedStructure(components: Component[]): NestedComponent[] {
  const result: NestedComponent[] = [];
  const map: Record<string, NestedComponent> = {};

  components.forEach(component => {
    const paths = component.name.split('/');
    const fileName = paths.pop()!;
    let currentLevel = result;

    paths.forEach(path => {
      let found = currentLevel.find(item => item.name === path);
      if (!found) {
        found = {
          name: path,
          children: [],
          id: Math.random(),
          component: null
        };
        currentLevel.push(found);
      }
      currentLevel = found.children!;
    });

    currentLevel.push({
      ...component,
      name: fileName
    });
  });

  return result;
}

export const COMPONENTS = mountComponents();
export const TAGS_COLOR = createTagsColor(flattenComponents(COMPONENTS));
