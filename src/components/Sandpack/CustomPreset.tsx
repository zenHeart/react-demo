/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */
import {memo, useRef, useState} from 'react';
import {flushSync} from 'react-dom';
import {
  useSandpack,
  useActiveCode,
  SandpackCodeEditor,
  SandpackLayout,
} from '@codesandbox/sandpack-react/unstyled';
import cn from 'classnames';

import {IconChevron} from './IconChevron';
import {NavigationBar} from './NavigationBar';
import {Preview} from './Preview';

import {useSandpackLint} from './useSandpackLint';

export const CustomPreset = memo(function CustomPreset({
  providedFiles,
}: {
  providedFiles: Array<string>;
}) {
  const {lintErrors, lintExtensions} = useSandpackLint();
  const {sandpack} = useSandpack();
  const {code} = useActiveCode();
  const {activeFile} = sandpack;
  const lineCountRef = useRef<{[key: string]: number}>({});
  if (!lineCountRef.current[activeFile]) {
    lineCountRef.current[activeFile] = code.split('\n').length;
  }
  const lineCount = lineCountRef.current[activeFile];
  const isExpandable = lineCount > 16;
  return (
    <SandboxShell
      providedFiles={providedFiles}
      lintErrors={lintErrors}
      lintExtensions={lintExtensions}
      isExpandable={isExpandable}
    />
  );
});

const SandboxShell = memo(function SandboxShell({
  providedFiles,
  lintErrors,
  lintExtensions,
  isExpandable,
}: {
  providedFiles: Array<string>;
  lintErrors: Array<any>;
  lintExtensions: Array<any>;
  isExpandable: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div
        className="shadow-lg dark:shadow-lg-dark rounded-lg"
        ref={containerRef}
        style={{
          contain: 'content',
        }}>
        <NavigationBar providedFiles={providedFiles} />
        <SandpackLayout
          className={cn(
           'sp-layout-expanded'
          )}>
          <Editor lintExtensions={lintExtensions} />
          <Preview
            className="order-last xl:order-2"
            isExpanded
            lintErrors={lintErrors}
          />

        </SandpackLayout>
      </div>
    </>
  );
});

const Editor = memo(function Editor({
  lintExtensions,
}: {
  lintExtensions: Array<any>;
}) {
  return (
    <SandpackCodeEditor
      showLineNumbers
      showInlineErrors
      showTabs={false}
      showRunButton={false}
      extensions={lintExtensions}
    />
  );
});
