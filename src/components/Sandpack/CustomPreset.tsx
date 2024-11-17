/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */
import { memo, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import {
  useSandpack,
  useActiveCode,
  SandpackCodeEditor,
  SandpackLayout,
} from '@codesandbox/sandpack-react/unstyled';
import cn from 'classnames';

import { NavigationBar } from './NavigationBar';
import { Preview } from './Preview';


export const CustomPreset = memo(function CustomPreset({
  providedFiles,
}: {
  providedFiles: Array<string>;
}) {
  const { sandpack } = useSandpack();
  const { code } = useActiveCode();
  const { activeFile } = sandpack;
  const lineCountRef = useRef<{ [key: string]: number }>({});
  if (!lineCountRef.current[activeFile]) {
    lineCountRef.current[activeFile] = code.split('\n').length;
  }
  const lineCount = lineCountRef.current[activeFile];
  const isExpandable = lineCount > 16;
  return (
    <SandboxShell
      providedFiles={providedFiles}
      isExpandable={isExpandable}
    />
  );
});

const SandboxShell = memo(function SandboxShell({
  providedFiles,
  isExpandable,
}: {
  providedFiles: Array<string>;
  isExpandable: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div
        className="rounded-lg shadow-lg dark:shadow-lg-dark"
        ref={containerRef}
        style={{
          contain: 'content',
        }}>
        <NavigationBar providedFiles={providedFiles} />
        <SandpackLayout
          className={cn(
            'sp-layout-expanded'
          )}>
          <Editor />
          <Preview
            className="order-last xl:order-2"
          />

        </SandpackLayout>
      </div>
    </>
  );
});

const Editor = memo(function Editor() {
  return (
    <SandpackCodeEditor
      showLineNumbers
      showInlineErrors
      showTabs={false}
      showRunButton={false}
    />
  );
});
