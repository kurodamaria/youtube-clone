import React, { useEffect } from 'react'

export function useResizeObserver (ref: React.RefObject<HTMLElement>, cb: ResizeObserverCallback) {
  useEffect(() => {
    if (ref.current === null) {
      return
    }
    const observer = new ResizeObserver(cb)
    observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  }, [cb, ref])
}