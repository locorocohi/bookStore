import type { ErrorInfo } from 'react';
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type PropsType = {
  children: JSX.Element;
};

type StateType = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    if (error) {
      return { hasError: true };
    }
  }

  // eslint-disable-next-line class-methods-use-this
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    toast('Error Notification !', {
      data: {
        title: 'Frontend lay down to rest',
        text: error.message,
      },
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Oops, there is an error!</h2>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </button>
          <ToastContainer />
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
