import React from 'react';
import './Tags.scss'

export default function Tags({tags,tagsColor,onClickTag}) {
  const jump = (e,tag) => {
    e.stopPropagation();
    e.preventDefault();
    let queryParams = new URLSearchParams(window.location.search);
    if(queryParams.get('tag' === tag)) {
      return 'tag'
    }
    queryParams.set("tag", tag);
    window.history.pushState(null, null, "?" + queryParams.toString());
    onClickTag(tag);
  }
  return (

    tags?  <span className="tags-wrap">{tags.map(tag => (
      <a
        className="tag"
        key={tag}
        onClick={(e) => jump(e, tag)}
        style={{
          background:tagsColor[tag]
        }
        }>{ tag }</a> ))}</span>:null)
}
