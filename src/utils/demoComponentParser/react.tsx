import Sandpack from '@/components/Sandpack/index'
import { resolveFilePath } from './common'

export function extractLocalImports(code: string): string[] {
    // Remove single-line comments
    const noSingleLineComments = code.replace(/\/\/.*/g, '');

    // Remodve multi-line comments
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

function findMatchingFile(resolvedPath: string, rawFilesMap: Record<string, string>): string | undefined {
    // Get all available file paths from rawFilesMap
    const availablePaths = Object.keys(rawFilesMap);

    // Try different extensions
    const possibleExtensions = [''];

    // Find a matching file path
    return availablePaths.find(filePath => {
        return possibleExtensions.some(ext => {
            const pathToCheck = resolvedPath + ext;
            return pathToCheck.includes(filePath);
        });
    });
}

export function parseMultiFileContent(
    componentString: string,
    filename: string,
    rawFilesMap: Record<string, string>
): Record<string, string> {
    const files: Record<string, string> = {};
    files['App.js'] = componentString;

    const imports = extractLocalImports(componentString);
    imports.forEach(importPath => {
        const resolvedPath = resolveFilePath(importPath, filename);

        // Find matching file in rawFilesMap
        const foundFile = findMatchingFile(resolvedPath, rawFilesMap);

        if (foundFile && rawFilesMap[foundFile]) {
            const foundContent = rawFilesMap[foundFile];
            // Add proper export
            files[`${importPath}`] = foundContent
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


export function convertToSandpackFormat(
    component: string,
    filename: string,
    rawFilesMap: Record<string, string>
) {
    // Parse files
    const files = parseMultiFileContent(component, filename, rawFilesMap);
    return function SandpackWrapper() {
        // Convert files object to Sandpack format
        const sandpackFiles: Record<string, { code: string }> = {};

        // Always ensure App.js exists and is the main entry
        sandpackFiles['App.js'] = { code: files['App.js'] };

        // Add other files with proper paths
        Object.entries(files).forEach(([path, code]) => {
            if (path !== 'App.js') {
                // Convert relative paths to absolute paths
                const absolutePath = path.startsWith('.')
                    ? path.replace('./', 'src/').replace('.tsx', '.js')
                    : `src/${path.replace('.tsx', '.js')}`;

                sandpackFiles[absolutePath] = { code };
            }
        });


        const Component = (
            <Sandpack>
                {
                    Object.entries(sandpackFiles).map(([path, info]) => (
                        <pre key={path} >
                            <code
                                className="language-js"
                                {...(path !== 'App.js' ? { meta: path } : {})}
                            >
                                {info.code}
                            </code>
                        </pre>
                    ))
                }
            </Sandpack>
        );
        return Component;
    }
}