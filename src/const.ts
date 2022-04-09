import { createTagsColor, parserHtml } from './utils/utils'

export function mountComponents() {
  let components: unknown[] = [];
  const reactComponents = import.meta.globEager('./demos/*.{jsx,tsx}')
  const htmlComponents = import.meta.globEager('./demos/*.html', { as: 'raw' })
  const demos = {
    ...reactComponents,
    ...htmlComponents
  }
  Object.keys(demos).forEach((filename, index) => {
    const componentConfig = demos[filename]
    const name = filename.replace(/^\.\//, '').replace(/.\w+$/, '');
    const component = componentConfig.default || componentConfig;
    let htmlInfo = {};
    if (typeof component === 'string') {
      htmlInfo = parserHtml(component);
    } else {
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
