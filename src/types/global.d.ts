interface Window {
  process: {
    cwd: () => string;
    env: {
      SANDPACK_CLIENT_VERSION: string;
    };
  };
}

