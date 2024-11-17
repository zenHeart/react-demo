/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */
import cn from 'classnames';
import { useState, useRef, useEffect } from 'react';
import { IconChevron } from './IconChevron';

import {
  SandpackCodeViewer,
  useSandpack,
} from '@codesandbox/sandpack-react/unstyled';
import type { SandpackMessageConsoleMethods } from '@codesandbox/sandpack-client';

const getType = (
  message: SandpackMessageConsoleMethods
): 'info' | 'warning' | 'error' => {
  if (message === 'log' || message === 'info') {
    return 'info';
  }

  if (message === 'warn') {
    return 'warning';
  }

  return 'error';
};

const getColor = (message: SandpackMessageConsoleMethods): string => {
  if (message === 'warn') {
    return 'text-yellow-500';
  } else if (message === 'error') {
    return 'text-red-500';
  } else {
    return 'text-secondary dark:text-secondary-dark';
  }
};

// based on https://github.com/tmpfs/format-util/blob/0e62d430efb0a1c51448709abd3e2406c14d8401/format.js#L1
// based on https://developer.mozilla.org/en-US/docs/Web/API/console#Using_string_substitutions
// Implements s, d, i and f placeholders
function formatStr(...inputArgs: any[]): any[] {
  const maybeMessage = inputArgs[0];
  if (typeof maybeMessage !== 'string') {
    return inputArgs;
  }
  // If the first argument is a string, check for substitutions.
  const args = inputArgs.slice(1);
  let formatted: string = String(maybeMessage);
  if (args.length) {
    const REGEXP = /(%?)(%([jds]))/g;

    formatted = formatted.replace(REGEXP, (match, escaped, ptn, flag) => {
      let arg = args.shift();
      switch (flag) {
        case 's':
          arg += '';
          break;
        case 'd':
        case 'i':
          arg = parseInt(arg, 10).toString();
          break;
        case 'f':
          arg = parseFloat(arg).toString();
          break;
      }
      if (!escaped) {
        return arg;
      }
      args.unshift(arg);
      return match;
    });
  }

  // Arguments that remain after formatting.
  if (args.length) {
    for (let i = 0; i < args.length; i++) {
      formatted += ' ' + String(args[i]);
    }
  }

  // Update escaped %% values.
  return [formatted.replace(/%{2,2}/g, '%')];
}

type ConsoleData = Array<{
  data: Array<string | Record<string, string>>;
  id: string;
  method: SandpackMessageConsoleMethods;
}>;

const MAX_MESSAGE_COUNT = 100;

export const SandpackConsole = ({ visible }: { visible: boolean }) => {
  const { listen } = useSandpack();
  const [logs, setLogs] = useState<ConsoleData>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isActive = true;
    const unsubscribe = listen((message) => {
      if (!isActive) {
        return;
      }

      // Reset logs on refresh/restart
      if (message.type === 'start' || message.type === 'refresh') {
        setLogs([]);
        return;
      }

      // Handle console messages
      if (message.type === 'console' && message.codesandbox) {
        setLogs((prev) => {
          const newLogs = message.log
            .filter((consoleData) => {
              return consoleData.method &&
                !(typeof consoleData.data[0] === 'string' &&
                  consoleData.data[0].indexOf('The above error occurred') !== -1);
            })
            .map((consoleData) => ({
              ...consoleData,
              id: `${Date.now()}-${Math.random()}`,
              data: Array.isArray(consoleData.data)
                ? consoleData.data.map(item =>
                  typeof item === 'undefined' ? 'undefined' : String(item)
                )
                : [String(consoleData.data)]
            }));

          return [...prev, ...newLogs].slice(-MAX_MESSAGE_COUNT);
        });
      }
    });

    return () => {
      unsubscribe();
      isActive = false;
    };
  }, [listen]);

  const clearLogs = () => {
    setLogs([]);
  };

  // Don't show console when not visible or no logs
  if (!visible || logs.length === 0) {
    return null;
  }

  return (
    <div className="absolute dark:border-gray-700 bg-white dark:bg-gray-95 border-t bottom-0 w-full dark:text-white">
      <div className="flex justify-between">
        <button className="flex items-center p-1">
          <span className="ps-1 text-sm">Console ({logs.length})</span>
        </button>
        <button
          className="p-1"
          onClick={clearLogs}>
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
          </svg>
        </button>
      </div>

      <div
        ref={wrapperRef}
        className="border-t dark:border-gray-700 overflow-auto"
        style={{ maxHeight: '20rem', minHeight: '3rem' }}>
        <div className="divide-y divide-gray-100 dark:divide-gray-700">
          {logs.map(({ data, id, method }) => (
            <div
              key={id}
              className={cn('px-4 py-2 font-mono text-sm')}>
              {data.map((msg, i) => (
                <span
                  key={i}
                  className={cn(
                    'block whitespace-pre-wrap break-words',
                    getColor(method)
                  )}>
                  {typeof msg === 'string' ? msg : JSON.stringify(msg, null, 2)}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
