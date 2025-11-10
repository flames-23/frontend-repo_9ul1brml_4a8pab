// Guard to avoid blank screen if HMR is disabled
import { useEffect, useState } from 'react'

export default function HmrGuard({ children }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(t)
  }, [])

  if (!mounted) return null
  return children
}
