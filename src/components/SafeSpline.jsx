import { useEffect, useState } from 'react'

// Dynamically load Spline without using React.lazy to avoid hard runtime errors
// If loading fails, we render a graceful fallback instead of crashing the app
export default function SafeSpline({ scene, fallback }) {
  const [SplineComp, setSplineComp] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let alive = true
    ;(async () => {
      try {
        const mod = await import('@splinetool/react-spline')
        if (!alive) return
        setSplineComp(() => mod.default)
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('Failed to load Spline:', e)
        if (!alive) return
        setError(e)
      }
    })()
    return () => {
      alive = false
    }
  }, [])

  if (error) {
    return (
      fallback || (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-purple-500/10">
          <div className="text-indigo-200/80 text-sm">3D preview unavailable</div>
        </div>
      )
    )
  }

  if (!SplineComp) {
    return (
      fallback || (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-purple-500/10">
          <div className="animate-pulse text-indigo-200/80">Loading 3D...</div>
        </div>
      )
    )
  }

  return <SplineComp scene={scene} />
}
