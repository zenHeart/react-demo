/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import { Children } from 'react';
import * as React from 'react';
import { SandpackProvider } from '@codesandbox/sandpack-react/unstyled';
import { SandpackLogLevel } from '@codesandbox/sandpack-client';
import { CustomPreset } from './CustomPreset';
import { createFileMap } from './createFileMap';
import { CustomTheme } from './Themes';
import { template } from './template';

type SandpackProps = {
  children: React.ReactNode;
  autorun?: boolean;
};


function SandpackRoot(props: SandpackProps) {
  let { children, autorun = true } = props;
  const codeSnippets = Children.toArray(children) as React.ReactElement[];
  const files = createFileMap(codeSnippets);


  return (
    <div className="sandpack sandpack--playground w-full h-[calc(100vh-40px)] flex" dir="ltr">
      <SandpackProvider
        files={{ ... template, ...files }}
        theme={CustomTheme}
        customSetup={{
          environment: 'create-react-app',
          dependencies: { 
            "@codesandbox/sandpack-react": "latest" 
          }
        }}
        options={{
          autorun,
          initMode: 'user-visible',
          initModeObserverOptions: { rootMargin: '1400px 0px' },
          bundlerURL: 'https://sandpack-bundler.codesandbox.io',
          logLevel: SandpackLogLevel.None,
        }}>
        <CustomPreset providedFiles={Object.keys(files)} />
      </SandpackProvider>
    </div>
  );
}

export default SandpackRoot;
