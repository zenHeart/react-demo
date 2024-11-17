import { convertToSandpackFormat as reactConvertToSandpackFormat } from './react'
import { convertToSandpackFormat as htmlConvertToSandpackFormat } from './html'

export enum DemoType {
    HTML = 'html',
    REACT = 'react'
}
export function wrapDemoWithSandpack(demoType: DemoType, code: string, filename: string, rawFilesMap: Record<string, string>): any {
    if (demoType === DemoType.REACT) {
        return reactConvertToSandpackFormat(code, filename, rawFilesMap)
    } else if (demoType === DemoType.HTML) {
        return htmlConvertToSandpackFormat(code, filename, rawFilesMap)
    } else {
        throw new Error(`Unsupported demo type: ${demoType}`)
    }
}