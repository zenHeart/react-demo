export function resolveFilePath(relativePath: string, currentFilePath: string): string {
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