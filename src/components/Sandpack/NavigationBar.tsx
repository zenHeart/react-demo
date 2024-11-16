/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import {
  useRef,
  useInsertionEffect,
  useCallback,
  useState,
  useEffect,
  Fragment,
} from 'react';
import cn from 'classnames';
import {
  FileTabs,
  useSandpack,
  useSandpackNavigation,
} from '@codesandbox/sandpack-react/unstyled';
import {OpenInCodeSandboxButton} from './OpenInCodeSandboxButton';
import {ResetButton} from './ResetButton';
import {DownloadButton} from './DownloadButton';
import {IconChevron} from './IconChevron';
import {Listbox} from '@headlessui/react';
import {OpenInTypeScriptPlaygroundButton} from './OpenInTypeScriptPlayground';

export function useEvent(fn: any): any {
  const ref = useRef(null);
  useInsertionEffect(() => {
    ref.current = fn;
  }, [fn]);
  return useCallback((...args: any) => {
    const f = ref.current!;
    // @ts-ignore
    return f(...args);
  }, []);
}

const getFileName = (filePath: string): string => {
  const lastIndexOfSlash = filePath.lastIndexOf('/');
  return filePath.slice(lastIndexOfSlash + 1);
};

export function NavigationBar({providedFiles}: {providedFiles: Array<string>}) {
  const {sandpack} = useSandpack();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tabsRef = useRef<HTMLDivElement | null>(null);
  // By default, show the dropdown because all tabs may not fit.
  // We don't know whether they'll fit or not until after hydration:
  const [showDropdown, setShowDropdown] = useState(true);
  const {activeFile, setActiveFile, visibleFiles, clients} = sandpack;
  const clientId = Object.keys(clients)[0];
  const {refresh} = useSandpackNavigation(clientId);
  const isMultiFile = visibleFiles.length > 1;
  const hasJustToggledDropdown = useRef(false);

  // Keep track of whether we can show all tabs or just the dropdown.
  const onContainerResize = useEvent((containerWidth: number) => {
    if (hasJustToggledDropdown.current === true) {
      // Ignore changes likely caused by ourselves.
      hasJustToggledDropdown.current = false;
      return;
    }
    if (tabsRef.current === null) {
      // Some ResizeObserver calls come after unmount.
      return;
    }
    const tabsWidth = tabsRef.current.getBoundingClientRect().width;
    const needsDropdown = tabsWidth >= containerWidth;
    if (needsDropdown !== showDropdown) {
      hasJustToggledDropdown.current = true;
      setShowDropdown(needsDropdown);
    }
  });

  useEffect(() => {
    if (isMultiFile) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          if (entry.contentBoxSize) {
            const contentBoxSize = Array.isArray(entry.contentBoxSize)
              ? entry.contentBoxSize[0]
              : entry.contentBoxSize;
            const width = contentBoxSize.inlineSize;
            onContainerResize(width);
          }
        }
      });
      const container = containerRef.current!;
      resizeObserver.observe(container);
      return () => resizeObserver.unobserve(container);
    } else {
      return;
    }

    // Note: in a real useEvent, onContainerResize would be omitted.
  }, [isMultiFile, onContainerResize]);

  const handleReset = () => {
    /**
     * resetAllFiles must come first, otherwise
     * the previous content will appear for a second
     * when the iframe loads.
     *
     * Plus, it should only prompt if there's any file changes
     */
    if (
      sandpack.editorState === 'dirty' &&
      confirm('Reset all your edits too?')
    ) {
      sandpack.resetAllFiles();
    }

    refresh();
  };

  return (
    <div className="relative z-10 flex items-center justify-between text-lg border-b rounded-t-lg bg-wash dark:bg-card-dark border-border dark:border-border-dark">
      <div className="flex-1 min-w-0 px-4 grow lg:px-6">
        <Listbox value={activeFile} onChange={setActiveFile}>
          <div ref={containerRef}>
            <div className="relative overflow-hidden">
              <div
                ref={tabsRef}
                className={cn(
                  // The container for all tabs is always in the DOM, but
                  // not always visible. This lets us measure how much space
                  // the tabs would take if displayed. We use this to decide
                  // whether to keep showing the dropdown, or show all tabs.
                  'w-[fit-content]',
                  showDropdown ? 'invisible' : ''
                )}>
                <FileTabs />
              </div>
            </div>
          </div>
          {isMultiFile && showDropdown && (
            <Listbox.Options className="absolute mt-0.5 bg-card dark:bg-card-dark px-2 inset-x-0 mx-0 rounded-b-lg border-1 border-border dark:border-border-dark rounded-sm shadow-md">
              {visibleFiles.map((filePath: string) => (
                <Listbox.Option key={filePath} value={filePath} as={Fragment}>
                  {({active}) => (
                    <li
                      className={cn(
                        'text-md mx-2 my-4 cursor-pointer',
                        active && 'text-link dark:text-link-dark'
                      )}>
                      {getFileName(filePath)}
                    </li>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          )}
        </Listbox>
      </div>
      <div
        className="flex items-center justify-end px-3 text-start"
        translate="yes">
        <DownloadButton providedFiles={providedFiles} />
        <ResetButton onReset={handleReset} />
        <OpenInCodeSandboxButton />
        {activeFile.endsWith('.tsx') && (
          <OpenInTypeScriptPlaygroundButton
            content={sandpack.files[activeFile]?.code || ''}
          />
        )}
      </div>
    </div>
  );
}
