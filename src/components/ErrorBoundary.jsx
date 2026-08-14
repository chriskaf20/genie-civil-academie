import React from 'react';

/**
 * Reusable ErrorBoundary to catch rendering crashes in subcomponents
 * and display a graceful recovery UI instead of a blank screen.
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught error:', error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return typeof this.props.fallback === 'function'
          ? this.props.fallback(this.state.error, this.resetError)
          : this.props.fallback;
      }
      return (
        <div className="rounded-2xl border border-amber-500/40 bg-slate-950/90 p-4 text-center space-y-3 my-2 shadow-lg">
          <div className="flex items-center justify-center gap-2 text-amber-400">
            <span className="text-lg">⚠️</span>
            <p className="text-xs font-bold uppercase tracking-wider">
              {this.props.title || 'Affichage temporairement indisponible'}
            </p>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed max-w-md mx-auto">
            {this.state.error?.message || 'Une erreur est survenue lors de l\'affichage de ce composant.'}
          </p>
          <button
            onClick={this.resetError}
            className="text-xs bg-slate-800 hover:bg-slate-700 text-sky-300 font-semibold px-3 py-1.5 rounded-xl border border-slate-700 transition-colors shadow-sm"
          >
            🔄 Réinitialiser la vue
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
