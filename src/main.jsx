import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import './index.css'
import ErrorBoundary from './components/ErrorBoundary'
import HmrGuard from './HmrGuard'

const rootEl = document.getElementById('root')

if (!rootEl) {
  const el = document.createElement('div')
  el.id = 'root'
  document.body.appendChild(el)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <HmrGuard>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </HmrGuard>
  </ErrorBoundary>,
)
