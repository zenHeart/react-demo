import { createTagsColor, parserHtml } from './utils/utils'

export function mountComponents() {
  let components: unknown[] = [];
  const reactComponents = import.meta.glob('./demos/**/*.demo.{jsx,tsx}', { eager: true })
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
    if (typeof component === 'string') {
      htmlInfo = parserHtml(component);
    } else {
      // @ts-ignore
      htmlInfo = component.meta || {};
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
