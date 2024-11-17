import Sandpack from '@/components/Sandpack/index'
import { resolveFilePath } from './common'
import sandpackhtml from '@/demos/sandpackhtml.demo.jsx'

export function extractLocalJsTag(code: string): string[] {
    const imports: string[] = [];

    // Remove HTML comments first
    const noHtmlComments = code.replace(/<!--[\s\S]*?-->/g, '');

    // Match only script tags with src attribute that have relative paths
    const scriptSrcRegex = /<script[^>]*?\ssrc=["'](\.\.?\/[^"']+)["'][^>]*>/g;
    let srcMatch;

    while ((srcMatch = scriptSrcRegex.exec(noHtmlComments)) !== null) {
        if (srcMatch[1].startsWith('./') || srcMatch[1].startsWith('../')) {
            imports.push(srcMatch[1]);
        }
    }

    // Remove duplicates and return
    return [...new Set(imports)];
}

function findMatchingFile(resolvedPath: string, rawFilesMap: Record<string, string>): string | undefined {
    // Get all available file paths from rawFilesMap
    const availablePaths = Object.keys(rawFilesMap);

    // Normalize the resolved path
    const normalizedPath = resolvedPath
        .replace(/^\.\//, '')  // Remove leading ./
        .replace(/^\.\.\//, '../'); // Keep ../ for parent directory references

    // Try to find exact match first
    let exactMatch = availablePaths.find(filePath =>
        filePath === normalizedPath ||
        filePath === `${normalizedPath}.js` ||
        filePath === `${normalizedPath}.jsx`
    );

    if (exactMatch) {
        return exactMatch;
    }

    // If no exact match, try to find partial match
    return availablePaths.find(filePath => {
        const normalizedFilePath = filePath.replace(/^\.\//, '');
        return normalizedFilePath.includes(normalizedPath) ||
            normalizedPath.includes(normalizedFilePath);
    });
}

export function parseMultiFileContent(
    componentString: string,
    filename: string,
    rawFilesMap: Record<string, string>
): Record<string, string> {
    const files: Record<string, string> = {};
    files['index.html'] = componentString;
    if (filename.endsWith("theory/jsx.demo.html")) {
        debugger;
    }

    const imports = extractLocalJsTag(componentString);
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
                if (path !== 'index.html') {
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
    if (filename.endsWith('theory/jsx.demo.html')) {
        debugger
    }
    return function SandpackWrapper() {
        // Convert files object to Sandpack format
        const sandpackFiles: Record<string, { code: string }> = {};

        // Always ensure App.js exists and is the main entry
        sandpackFiles['inde.html'] = { code: files['index.html'] };

        // Add other files with proper paths
        Object.entries(files).forEach(([path, code]) => {
            if (path !== 'index.html') {
                // Convert relative paths to absolute paths
                const absolutePath = path.startsWith('.')
                    ? path.replace('./', 'src/').replace('.tsx', '.js')
                    : `src/${path.replace('.tsx', '.js')}`;

                sandpackFiles[absolutePath] = { code };
            }
        });

        const Component = (
            <Sandpack template="vanilla">
                {
                    Object.entries(sandpackFiles).map(([path, info]) => (
                        <pre key={path} >
                            <code
                                className={
                                    path.endsWith('.html') ? 'language-html' : 'language-js'
                                }
                                {...(path !== 'inde.html' ? { meta: path } : {})}
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

