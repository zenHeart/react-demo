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
