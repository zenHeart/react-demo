import React, { useState } from 'react'
import { NavLink, Route, Routes, useSearchParams, useLocation } from 'react-router-dom'
import Tags from './Tags'

const styles = {
  layout: {
    display: 'flex',
    minHeight: '100vh',
  },
  sidebar: {
    width: '300px',
    borderRight: '1px solid #e5e7eb',
    backgroundColor: '#f8f9fa',
    overflowY: 'auto' as const,
  },
  navSection: {
  },
  navSectionTitle: {
    fontSize: '0.875rem',
    fontWeight: 500,
    color: '#1a1a1a',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    marginBottom: '0.75rem',
  },
  navSectionList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  navItem: {
    margin: '0.25rem 0',
    listStyle: 'none',
  },
  navLink: {
    display: 'block',
    padding: '0.375rem 0.75rem',
    color: '#4b5563',
    textDecoration: 'none',
    borderRadius: '0.375rem',
    fontSize: '0.9375rem',
    '&:hover': {
      backgroundColor: '#f3f4f6',
      color: '#000',
    },
  },
  navLinkActive: {
    backgroundColor: '#e5e7eb',
    color: '#000',
    fontWeight: 500,
  },
  navTags: {
    marginLeft: '0.5rem',
    opacity: 0.7,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    overflowY: 'auto' as const,
  },
  globalStyles: {
    body: {
      margin: 0,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      WebkitFontSmoothing: 'antialiased',
      lineHeight: 1.5,
    },
    '*': {
      boxSizing: 'border-box' as const,
    },
  }
};

interface NavItem {
  name: string;
  id?: number;
  component?: any;
  tags: string[];
  children?: NavItem[];
}

function formatComponent(component: any) {
  // html 组件使用 iframe
  if (typeof component === 'string') {
    // @ts-ignore
    return <iframe srcDoc={component} />
  } else {
    return React.createElement(component)
  }
}

// @ts-ignore
function Nav({ children, tagsColor }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);
  const filterTag = searchParams.get('tag');
  const location = useLocation();

  const handleTagChange = (tag: string) => {
    setSearchParams({ tag });
  }

  const toggleGroup = (groupName: string) => {
    setExpandedGroups(prev =>
      prev.includes(groupName)
        ? prev.filter(name => name !== groupName)
        : [...prev, groupName]
    );
  }

  const matchesFilter = (item: NavItem): boolean => {
    if (!filterTag) return true;

    if (item.tags?.includes(filterTag)) return true;

    if (item.children) {
      return item.children.some(child => matchesFilter(child));
    }

    return false;
  }

  const renderNavItems = (items: NavItem[], parentPath = '') => {
    return items
      .filter(matchesFilter)
      .map(item => {
        const currentPath = parentPath ? `${parentPath}/${item.name}` : item.name;
        const itemTags = item.tags || [];

        if (item.children) {
          const filteredChildren = item.children.filter(matchesFilter);
          if (filteredChildren.length === 0) return null;

          return (
            <div key={item.name} style={styles.navSection}>
              <div style={styles.navSectionTitle}>{item.name}</div>
              <ul style={styles.navList}>
                {renderNavItems(item.children, item.name)}
              </ul>
            </div>
          );
        }

        return (
          <li key={currentPath} style={styles.navItem}>
            <NavLink
              style={({ isActive }) => ({
                ...styles.navLink,
                ...(isActive ? styles.navLinkActive : {})
              })}
              to={{ pathname: currentPath, search: location.search }}
            >
              {item.name}
              {itemTags.length > 0 && (
                <span style={styles.navTags}>
                  <Tags onClickTag={handleTagChange} tagsColor={tagsColor} tags={itemTags} />
                </span>
              )}
            </NavLink>
          </li>
        );
      })
      .filter(Boolean);
  }

  const flattenRoutes = (items: NavItem[], parentPath = ''): Array<{ name: string, path: string, component: any, tags: string[] }> => {
    return items.reduce((acc, item) => {
      const currentPath = parentPath ? `${parentPath}/${item.name}` : item.name;

      if (item.children) {
        return [...acc, ...flattenRoutes(item.children, item.name)];
      }
      if (item.component) {
        return [...acc, {
          name: item.name,
          path: currentPath,
          component: item.component,
          tags: item.tags || []
        }];
      }
      return acc;
    }, [] as Array<{ name: string, path: string, component: any, tags: string[] }>);
  }

  return (
    <div style={styles.layout}>
      <nav style={styles.sidebar}>
        <ul style={styles.navList}>
          {renderNavItems(children)}
        </ul>
      </nav>
      <main style={styles.content}>
        <Routes>
          {flattenRoutes(children).map(({ path, component }) => (
            <Route
              key={path}
              path={path}
              element={formatComponent(component)}
            />
          ))}
        </Routes>
      </main>
    </div>
  )
}

// Add global styles
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
  }
  * {
    box-sizing: border-box;
  }
`;
document.head.appendChild(styleSheet);

export default Nav
