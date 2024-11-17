import React, { useState, useEffect } from 'react';
import { SandpackLayout, SandpackConsole } from '@codesandbox/sandpack-react';
import { useSandpack } from '@codesandbox/sandpack-react';

export function Sandpack({ children, ...props }: SandpackProps) {
    const [consoleHasLogs, setConsoleHasLogs] = useState(false);
    const { listen } = useSandpack();

    // Listen for console logs
    useEffect(() => {
        const unsubscribe = listen((message) => {
            if (message.type === 'console' && message.codesandbox) {
                const hasValidLogs = message.log.some(log =>
                    log.method &&
                    !(typeof log.data[0] === 'string' &&
                        log.data[0].indexOf('The above error occurred') !== -1)
                );
                setConsoleHasLogs(hasValidLogs);
            }

            // Reset console state on refresh/restart
            if (message.type === 'start' || message.type === 'refresh') {
                setConsoleHasLogs(false);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="sandpack rounded-lg">
            {/* ... other components ... */}

            {consoleHasLogs && (
                <SandpackLayout>
                    <SandpackConsole visible={showConsole} />
                </SandpackLayout>
            )}
        </div>
    );
} 