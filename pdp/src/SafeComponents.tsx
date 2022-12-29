import * as React from "react";

export interface ISafeComponentProps {}

export interface ISafeComponentState {
  hasError: boolean;
}

export default class SafeComponent extends React.Component<
  ISafeComponentProps,
  ISafeComponentState
> {
  constructor(props: ISafeComponentProps) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
    console.log(error);
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {}

  public render() {
    if (this.state.hasError) {
      return <h1>Something Went Wrong</h1>;
    }
    return this.props.children;
  }
}
