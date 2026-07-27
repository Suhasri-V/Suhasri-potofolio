import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-[400px] p-8 bg-neutral-950 border-2 border-neutral-800 rounded-3xl m-8 text-center">
            <div className="space-y-4">
                <h2 className="text-4xl font-bold text-red-500 font-mono tracking-tighter">SYSTEM_FAILURE</h2>
                <p className="text-neutral-400 font-mono">The module has encountered an unexpected error.</p>
            </div>
        </div>
      );
    }

    return this.props.children;
  }
}
