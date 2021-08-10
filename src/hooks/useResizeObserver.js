import { useEffect, useRef } from 'react'

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
