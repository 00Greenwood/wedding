import React from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./ErrorFallback";

export const ErrorBoundary = ({ children }) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()}
    >
      {children}
    </ReactErrorBoundary>
  );
};
