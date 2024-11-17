interface TagsProps {
  tags: string[];
  tagsColor: Record<string, string>;
  onClickTag: (tag: string) => void;
}

const styles = {
  tagsWrap: {
    lineHeight: 0,
    verticalAlign: 'top',
    display: 'inline-block',
  },
  tag: {
    display: 'inline-block',
    fontSize: '14px',
    height: '18px',
    lineHeight: '18px',
    borderRadius: '3px',
    padding: '0 6px',
    color: 'black',
    verticalAlign: 'top',
    marginRight: '5px',
    cursor: 'pointer',
  }
};

function Tags({ tags, tagsColor, onClickTag }: TagsProps) {
  return (
    <span style={styles.tagsWrap}>
      {tags.map((tag) => (
        <span
          key={tag}
          style={{
            ...styles.tag,
            backgroundColor: tagsColor[tag] || '#eee',
          }}
          onClick={(e) => {
            e.preventDefault();
            onClickTag(tag);
          }}
        >
          {tag}
        </span>
      ))}
    </span>
  );
}

export default Tags;