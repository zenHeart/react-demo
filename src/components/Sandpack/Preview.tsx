/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState, useEffect, useMemo, useId } from 'react';
import { useSandpack, SandpackStack } from '@codesandbox/sandpack-react/unstyled';
import cn from 'classnames';
import { ErrorMessage } from './ErrorMessage';
import { SandpackConsole } from './Console';
import { CSSProperties } from 'react';
import { LoadingOverlay } from './LoadingOverlay';

type CustomPreviewProps = {
  className?: string;
};

function useDebounced(value: any): any {
  const ref = useRef<any>(null);
  const [saved, setSaved] = useState(value);
  useEffect(() => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      setSaved(value);
    }, 300);
  }, [value]);
  return saved;
}

export function Preview({
  className,
}: CustomPreviewProps) {
  const { sandpack, listen } = useSandpack();
  const [bundlerIsReady, setBundlerIsReady] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [iframeComputedHeight, setComputedAutoHeight] = useState<number | null>(
    null
  );

  let { error: rawError, registerBundler, unregisterBundler } = sandpack;

  if (
    rawError &&
    rawError.message === '_csbRefreshUtils.prelude is not a function'
  ) {
    // Work around a noisy internal error.
    rawError = null;
  }

  // When throwing a new Error in Sandpack - we want to disable the dev error dialog
  // to show the Error Boundary fallback
  if (rawError && rawError.message.includes('Example Error:')) {
    rawError = null;
  }

  if (rawError != null && rawError.title === 'Runtime Exception') {
    rawError.title = 'Runtime Error';
  }

  // It changes too fast, causing flicker.
  const error = useDebounced(rawError);

  const clientId = useId();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const sandpackIdle = sandpack.status === 'idle';

  useEffect(function createBundler() {
    const iframeElement = iframeRef.current!;
    registerBundler(iframeElement, clientId);

    return () => {
      unregisterBundler(clientId);
    };
  }, []);

  useEffect(
    function bundlerListener() {
      let timeout: ReturnType<typeof setTimeout>;

      const unsubscribe = listen((message) => {
        if (message.type === 'resize') {
          setComputedAutoHeight(message.height);
        } else if (message.type === 'start') {
          if (message.firstLoad) {
            setBundlerIsReady(false);
          }

          timeout = setTimeout(() => {
            setShowLoading(true);
          }, 500);
        } else if (message.type === 'done') {
          setBundlerIsReady(true);
          setShowLoading(false);
          clearTimeout(timeout);

          if (!iframeComputedHeight) {
            setComputedAutoHeight(150);
          }
        }
      }, clientId);

      return () => {
        clearTimeout(timeout);
        setBundlerIsReady(false);
        setComputedAutoHeight(null);
        unsubscribe();
      };
    },
    [sandpackIdle]
  );

  // WARNING:
  // The layout and styling here is convoluted and really easy to break.
  // If you make changes to it, you need to test different cases:
  // - Content -> (compile | runtime) error -> content editing flow should work.
  // - Errors should expand parent height rather than scroll.
  // - Long sandboxes should scroll unless "show more" is toggled.
  // - Expanded sandboxes ("show more") have sticky previews and errors.
  // - Sandboxes have autoheight based on content.
  // - That autoheight should be measured correctly! (Check some long ones.)
  // - You shouldn't see nested scrolls (that means autoheight is borked).
  // - Ideally you shouldn't see a blank preview tile while recompiling.
  // - Container shouldn't be horizontally scrollable (even while loading).
  // - It should work on mobile.
  // The best way to test it is to actually go through some challenges.

  const hideContent = error || (!iframeComputedHeight && !bundlerIsReady);

  const iframeWrapperPosition = (): CSSProperties => {
    if (hideContent) {
      return { position: 'relative' };
    }

    return {
      position: 'sticky',
      top: '1rem',
      zIndex: 10,
    };
  };

  const previewStyles = {
    wrapper: {
      flex: 1,
      overflow: 'auto',
      height: '100vh',
      padding: '1rem',
    }
  };

  return (
    <SandpackStack
      className={cn(
        className,
      )}>
      <div style={previewStyles.wrapper}>
        <div
          className={cn(
            "bg-card dark:bg-wash-dark h-full relative rounded-lg",
            "transform-gpu"
          )}
          style={{
            overflow: 'auto',
            maxHeight: '80vh',
            padding: '1rem',
            willChange: 'transform'
          }}>
          <div style={iframeWrapperPosition()}>
            <iframe
              ref={iframeRef}
              className={cn(
                'rounded-lg bg-white shadow-md w-full max-w-full transition-opacity',
                hideContent
                  ? 'absolute opacity-0 pointer-events-none duration-75'
                  : 'opacity-100 duration-150'
              )}
              title="Sandbox Preview"
              style={{
                height: iframeComputedHeight || '150px',
                minHeight: '150px',
                zIndex: 1,
              }}
            />
          </div>

          {error && (
            <div className="z-50 sticky top-8">
              <ErrorMessage error={error} />
            </div>
          )}

          <LoadingOverlay
            clientId={clientId}
            dependenciesLoading={!bundlerIsReady && iframeComputedHeight === null}
            forceLoading={showLoading}
          />
        </div>
      </div>
      <SandpackConsole visible={true} />
    </SandpackStack>
  );
}
