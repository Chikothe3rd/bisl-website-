/**
 * Error Boundary Component
 * Catches errors and displays a fallback UI
 */

import { Component, ReactNode } from 'react';
import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div
            className="flex items-center justify-center min-h-[400px] px-4"
            role="alert"
            aria-live="assertive"
          >
            <div className="card-premium p-8 max-w-md text-center">
              <div className="flex justify-center mb-4">
                <AlertCircle className="w-12 h-12 text-destructive" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Something went wrong
              </h2>
              <p className="text-muted-foreground mb-6">
                {this.state.error?.message || 'An unexpected error occurred. Please try again.'}
              </p>
              <Button
                onClick={this.resetError}
                className="touch-target"
                aria-label="Retry operation"
              >
                Try Again
              </Button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
