import React from 'react';

interface TagsProps {
  tags: string[];
  tagsColor: Record<string, string>;
  onClickTag: (tag: string) => void;
}

const styles = {
  tagsWrap: {
    lineHeight: 0,
    verticalAlign: 'middle',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
  },
  tag: {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '12px',
    height: '20px',
    lineHeight: '20px',
    borderRadius: '4px',
    padding: '0 8px',
    color: '#000',
    fontWeight: 500,
    letterSpacing: '0.02em',
    transition: 'all 0.2s ease',
    opacity: 0.85,
    cursor: 'pointer',
    userSelect: 'none' as const,
  },
  tagHoverStyles: {
    opacity: 1,
    transform: 'translateY(-1px)',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  }
};

function Tags({ tags, tagsColor, onClickTag }: TagsProps) {
  const [hoveredTag, setHoveredTag] = React.useState<string | null>(null);

  return (
    <span style={styles.tagsWrap}>
      {tags.map((tag) => {
        const isHovered = hoveredTag === tag;
        const baseColor = tagsColor[tag] || '#eee';

        // Calculate darker color for text
        const textColor = baseColor.includes('hsl')
          ? baseColor.replace('50%', '30%') // Darker for HSL colors
          : '#000000';

        return (
          <span
            key={tag}
            style={{
              ...styles.tag,
              backgroundColor: baseColor,
              color: textColor,
              ...(isHovered ? styles.tagHoverStyles : {}),
            }}
            onClick={(e) => {
              e.preventDefault();
              onClickTag(tag);
            }}
            onMouseEnter={() => setHoveredTag(tag)}
            onMouseLeave={() => setHoveredTag(null)}
          >
            {tag}
          </span>
        );
      })}
    </span>
  );
}

export default Tags;