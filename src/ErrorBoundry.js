import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, info) {
    console.log(error, info.componentStack, "error");
  }

  render() {
    if (this.state.hasError) {
      return <div>{this.state.errorMessage || "Something went wrong!"}</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
