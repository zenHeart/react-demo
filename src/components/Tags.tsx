import React from 'react';
import './Tags.less'

interface TagsProps {
  tags: string[],
  tagsColor: Record<string, string>,
  onClickTag: Function
}

export default function Tags(props: React.PropsWithChildren<TagsProps> ) {
  const jump = (e: any, tag: string) => {
    e.stopPropagation();
    e.preventDefault();
    let queryParams = new URLSearchParams(window.location.search);
    //@ts-ignore
    if(queryParams.get('tag' === tag)) {
      return 'tag'
    }
    queryParams.set("tag", tag);
    //@ts-ignore
    window.history.pushState(null, null, "?" + queryParams.toString());
    props.onClickTag(tag);
  }
  return (

    props.tags?  <span className="tags-wrap">{props.tags.map(tag => (
      <span
        className="tag"
        key={tag}
        onClick={(e) => jump(e, tag)}
        style={{
          background:props.tagsColor[tag]
        }
        }>{ tag }</span> ))}</span>:null)
}
