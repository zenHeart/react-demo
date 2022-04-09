import yaml from 'js-yaml';
import randomColor from 'randomcolor';

export function parserHtml(content: string) {
  const START_YAML = '---';
  const END_YAML = '\n---\n';

  if (content.startsWith(START_YAML)) {
    let lastIndex = content.indexOf(END_YAML) + END_YAML.length;
    let yamlData = yaml.load(content.slice(0, lastIndex - END_YAML.length));

    return {
      component: content.slice(lastIndex),
      ...(yamlData as {})
    };
  }
  return { component: content };
}

export function createTagsColor(navs: unknown[]) {
  let colors = {};
  let tags =
    new Set(
      navs
        .map((ele: any ) => ele.tags)
        .reduce((sum, ele) => sum.concat(ele), [])
        .filter((ele : any) => ele)
    ) || [];
  tags.forEach((tag) => {
    // @ts-ignore
    colors[tag] = randomColor({
      luminosity: 'light'
    });
  });
  return colors;
}
