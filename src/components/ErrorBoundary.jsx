import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('UI ErrorBoundary caught:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#030617] text-white flex items-center justify-center p-6">
          <div className="max-w-lg w-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl text-center">
            <h1 className="text-2xl font-bold">Something went wrong</h1>
            <p className="mt-2 text-sm text-indigo-100/90">
              The page encountered an issue while loading. Try refreshing, or use the button below.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-purple-500 px-5 py-2.5 text-white font-medium"
            >
              Reload
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
