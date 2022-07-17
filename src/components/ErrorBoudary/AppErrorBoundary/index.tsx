import React from 'react';
import Catch, { IAppErrorBoundary } from '..';

const AppErrorBoundary = Catch((props: IAppErrorBoundary, error?: Error) => {
  if (error) {
    return <h1>Something went wrong</h1>;
  }
  return props.children;
});

export default AppErrorBoundary;
