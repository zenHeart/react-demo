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

const sandboxStyle = `
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  margin: 20px;
  padding: 0;
}

h1 {
  margin-top: 0;
  font-size: 22px;
}

h2 {
  margin-top: 0;
  font-size: 20px;
}

h3 {
  margin-top: 0;
  font-size: 18px;
}

h4 {
  margin-top: 0;
  font-size: 16px;
}

h5 {
  margin-top: 0;
  font-size: 14px;
}

h6 {
  margin-top: 0;
  font-size: 12px;
}

code {
  font-size: 1.2em;
}

ul {
  padding-inline-start: 20px;
}
`.trim();

function SandpackRoot(props: SandpackProps) {
  let { children, autorun = true } = props;
  const codeSnippets = Children.toArray(children) as React.ReactElement[];
  const files = createFileMap(codeSnippets);

  const isHtmlDemo = files['/index.html'] !== undefined;

  files['/src/styles.css'] = {
    code: [sandboxStyle, files['/src/styles.css']?.code ?? ''].join('\n\n'),
    hidden: !files['/src/styles.css']?.visible,
  };

  return (
    <div className="sandpack sandpack--playground w-full" dir="ltr">
      <SandpackProvider
        files={{ ...(isHtmlDemo ? {} : template), ...files }}
        theme={CustomTheme}
        customSetup={{
          environment: isHtmlDemo ? 'static' : 'create-react-app',
        }}
        options={{
          autorun,
          initMode: 'user-visible',
          initModeObserverOptions: { rootMargin: '1400px 0px' },
          bundlerURL: isHtmlDemo ?
            "https://preview.sandpack-static-server.codesandbox.io" :
            "https://786946de.sandpack-bundler-4bw.pages.dev",
          logLevel: SandpackLogLevel.None,
          externalResources: isHtmlDemo ? [
            "https://unpkg.com/react@16/umd/react.development.js",
            "https://unpkg.com/react-dom@16/umd/react-dom.development.js"
          ] : []
        }}>
        <CustomPreset providedFiles={Object.keys(files)} />
      </SandpackProvider>
    </div>
  );
}

export default SandpackRoot;
