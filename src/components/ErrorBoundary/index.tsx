import React from "react";
import { AxiosError } from "axios";

import Oops from "../../routes/Oops";
import { reportError } from "../../utils";

interface IErrorBoundaryProps {
  children: React.ReactNode;
}

interface IErrorBoundaryState {
  error?: AxiosError;
}

class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromError(error: AxiosError) {
    return { error };
  }

  componentDidCatch(error: AxiosError) {
    reportError(error);
  }

  render() {
    const { error } = this.state;

    if (error) {
      return <Oops error={error} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
