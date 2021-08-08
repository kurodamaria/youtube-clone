import { useEffect } from 'react'

export function useWindowResize (handler) {
  useEffect(() => {
    window.addEventListener('resize', handler)
    return () => {
      window.removeEventListener('resize', handler)
    }
  }, [handler])
}
