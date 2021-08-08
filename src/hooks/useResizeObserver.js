import { useEffect } from 'react'
import { useRef } from 'react/cjs/react.development'

export function useResizeObserver (cb) {
  const ref = useRef()

  useEffect(() => {
    const observer = new ResizeObserver(cb)
    observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  }, [cb, ref])

  return ref
}
