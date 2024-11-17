import React, { useState } from 'react'
import { NavLink, Route, Routes, useSearchParams, useLocation, Navigate, useNavigate } from 'react-router-dom'
import Tags from './Tags'

const styles = {
  layout: {
    display: 'flex',
    minHeight: '100vh',
  },
  sidebar: {
    transition: 'width 0.3s ease',
    borderRight: '1px solid #e5e7eb',
    backgroundColor: '#f8f9fa',
    overflowY: 'auto' as const,
    position: 'relative' as const,
  },
  sidebarExpanded: {
    width: '300px',
  },
  sidebarCollapsed: {
    width: '50px',
  },
  navHeader: {
    position: 'sticky' as const,
    top: 0,
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #e5e7eb',
    padding: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 10,
  },
  homeButton: {
    display: 'flex',
    alignItems: 'center',
    padding: '6px 12px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: 'transparent',
    color: '#666',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'all 0.2s ease',
    '&:hover': {
      color: '#000',
      backgroundColor: '#f0f0f0',
    }
  },
  toggleButton: {
    width: '24px',
    height: '24px',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#666',
    transition: 'all 0.2s ease',
    '&:hover': {
      color: '#000',
      backgroundColor: '#f0f0f0',
    }
  },
  navContent: {
    padding: '0.5rem 1rem 2rem 1.5rem',
  },
  navContentHidden: {
    opacity: 0,
    visibility: 'hidden' as const,
    position: 'absolute' as const,
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
    display: 'sticky' as const,
    top: 0,
    height: '100vh',
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

// Add a chevron icon component
const ChevronIcon = ({ expanded }: { expanded: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    style={{
      transform: expanded ? 'rotate(180deg)' : 'none',
      transition: 'transform 0.3s ease'
    }}
  >
    <path d="M5.7 13.7L5 13l4.6-4.6L5 3.7 5.7 3l5.3 5.4z" />
  </svg>
);

// Home icon component
const HomeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    style={{ marginRight: '6px' }}
  >
    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
  </svg>
);

// @ts-ignore
function Nav({ children, tagsColor }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const filterTag = searchParams.get('tag');
  const location = useLocation();
  const navigate = useNavigate();

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

  // Get first available route for redirect
  const getFirstAvailableRoute = () => {
    const flatRoutes = flattenRoutes(children);
    return flatRoutes[0]?.path || '/';
  };

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const handleHomeClick = () => {
    setSearchParams({}); // Clear any search params
    setExpandedGroups([]); // Collapse all groups
    navigate(getFirstAvailableRoute()); // Navigate to first route
  };

  return (
    <div style={styles.layout}>
      <nav
        style={{
          ...styles.sidebar,
          ...(isSidebarExpanded ? styles.sidebarExpanded : styles.sidebarCollapsed)
        }}
      >
        <div style={styles.navHeader}>
          {isSidebarExpanded && (
            <button
              onClick={handleHomeClick}
              style={styles.homeButton}
              title="Back to home"
            >
              <HomeIcon />
              Home
            </button>
          )}
          <button
            onClick={toggleSidebar}
            style={{
              ...styles.toggleButton,
              marginLeft: isSidebarExpanded ? 'auto' : 0,
            }}
            title={isSidebarExpanded ? "Collapse sidebar" : "Expand sidebar"}
          >
            <ChevronIcon expanded={!isSidebarExpanded} />
          </button>
        </div>
        <div
          style={{
            ...styles.navContent,
            ...(isSidebarExpanded ? {} : styles.navContentHidden)
          }}
        >
          <ul style={styles.navList}>
            {renderNavItems(children)}
          </ul>
        </div>
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
          <Route
            path="*"
            element={<Navigate to={getFirstAvailableRoute()} replace />}
          />
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
